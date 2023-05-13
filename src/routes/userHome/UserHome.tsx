import { ReactElement, useEffect, useState } from "react";
import { ItemsApi } from "../../api/ItemsApi";
import { Box, Button, Flex, Text, Select } from "@chakra-ui/react";
import { AxiosError } from "axios";
import Chart from "../../components/Chart/Chart";

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

  // THIS GETS ALL ITEMS AVAILABLE FOR SELECTION
  useEffect(() => {
    ItemsApi.getAllItems()
      .then((response: Item[]) => {
        setItems(response);
        // HERE WE SET THE ITEM TO FOLLOW TO FIRST ITEM IN THE ARRAY
        setItemToFollow(response[0]);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error.message);
      });
  }, []);

  // THIS GETS ALL ITEMS THAT USER IS FOLLOWING ALREADY
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
        // RESPONSE IS NOT RELEVEANT
        setFollowedItems([...followedItems, itemToFollow]);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error.message);
      });
  };

  const unfollowItem = (itemId: number): void => {
    ItemsApi.unfollowItem(itemId)
      .then((response: Item) => {
        // RESPONSE IS IRRELEVANT
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

  return (
    <Box minH={"100vh"}>
      <Flex
        mt={3}
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
        mt={7}
        minH={"50vh"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {followedItems.length === 0 ? (
          <Text fontSize={"30pt"}>No followed items</Text>
        ) : (
          followedItems.map((item: Item) => (
            <Flex
              key={`Flex${item.id}`}
              width={"60%"}
              height={"400px"}
              rowGap={5}
              m={10}
              alignItems={"center"}
              justifyContent={"center"}
              direction={"column"}
            >
              <Chart key={`Chart${item.id}`} item={item} />
              <Button
                key={`Button${item.id}`}
                padding={"10px"}
                onClick={() => unfollowItem(item.id)}
              >
                Unfollow
              </Button>
            </Flex>
          ))
        )}
      </Flex>
    </Box>
  );
};

export default UserHome;
