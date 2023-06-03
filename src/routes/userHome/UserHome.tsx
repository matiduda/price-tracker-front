import { ReactElement, useEffect, useState } from "react";
import { ItemsApi } from "../../api/ItemsApi";
import {
  Box,
  Button,
  Flex,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import Chart from "../../components/Chart/Chart";
import { SearchIcon } from "@chakra-ui/icons";

type Item = {
  id: number;
  name: string;
};

const UserHome = (): ReactElement => {
  const [items, setItems] = useState<Item[]>([]);
  const [followedItems, setFollowedItems] = useState<Item[]>([]);
  const [itemToFollow, setItemToFollow] = useState<Item>({
    id: 0,
    name: "None",
  });
  const [searchPhrase, setSearchPhrase] = useState<string>("");

  useEffect(() => {
    ItemsApi.getAllItems()
      .then((response: Item[]) => {
        setItems(response);
        setItemToFollow(response[0]);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    ItemsApi.getAllFollowedItems()
      .then((response: Item[]) => {
        setFollowedItems(response);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error.message);
      });
  }, []);

  const followItem = () => {
    if (followedItems.map((item) => item.id).includes(itemToFollow.id)) {
      return;
    }
    ItemsApi.followItem(itemToFollow.id)
      .then((response) => {
        setSearchPhrase("");
        setFollowedItems([...followedItems, itemToFollow]);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error.message);
      });
  };

  const unfollowItem = (itemId: number): void => {
    ItemsApi.unfollowItem(itemId)
      .then((response: Item) => {
        setFollowedItems(followedItems.filter((item) => item.id !== itemId));
      })
      .catch((error: Error | AxiosError) => {
        console.log(error.message);
      });
  };

  const findItemIdByName = (name: string): number => {
    const item: Item | undefined = items.find((item) => item.name === name);
    return item === undefined ? 0 : item.id;
  };

  const getFilteredItemsBySearchPhrase = (): Item[] => {
    return followedItems.filter((item: Item) =>
      item.name.toLowerCase().includes(searchPhrase.toLowerCase())
    );
  };

  return (
    <Box minH={"100vh"}>
      <Flex justify={"center"}>
        <Heading size="4xl">Prices from space</Heading>
      </Flex>
      <Flex
        my={5}
        columnGap={5}
        mx={"auto"}
        px={8}
        align={"center"}
        direction={"column"}
        w={{ base: "90%", md: "70%", lg: "50%" }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            type={"text"}
            bg={"black"}
            color={"white"}
            placeholder={"Search product"}
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
          />
        </InputGroup>
      </Flex>
      <Flex
        columnGap={5}
        mx={"auto"}
        px={8}
        w={{ base: "90%", md: "70%", lg: "50%" }}
      >
        {items.length === 0 ? null : (
          <Select
            bg={"black"}
            onChange={(e) =>
              setItemToFollow({
                id: findItemIdByName(e.target.value),
                name: e.target.value,
              })
            }
          >
            {items.map((item) => (
              <option
                style={{ background: "black" }}
                value={item.name}
                key={item.id}
                disabled={followedItems
                  .map((item) => item.id)
                  .includes(item.id)}
              >
                {item.name}
              </option>
            ))}
          </Select>
        )}
        <Button onClick={followItem}>Follow</Button>
      </Flex>
      <Flex
        mt={10}
        p={5}
        minH={"50vh"}
        direction={"row"}
        columnGap={5}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap="wrap"
      >
        {getFilteredItemsBySearchPhrase().length === 0 ? (
          <Text fontSize={"30pt"}>No items found</Text>
        ) : (
          getFilteredItemsBySearchPhrase().map((item: Item) => (
            <Chart key={item.id} item={item} unfollowItem={unfollowItem} />
          ))
        )}
      </Flex>
    </Box>
  );
};

export default UserHome;
