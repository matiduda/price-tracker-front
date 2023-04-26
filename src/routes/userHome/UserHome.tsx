import { ReactElement, useEffect, useState } from "react";
import { ItemsApi } from "../../api/ItemsApi";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Select,
} from "@chakra-ui/react";
import { AxiosError } from "axios";
import Chart from "../../components/Chart/Chart";

type Item = {
  id: number;
  name: string;
};

const UserHome = (): ReactElement => {
  const [items, setItems] = useState<Item[]>([]);
  const [followedItems, setFollowedItems] = useState<Item[]>([]);
  const [error, setError] = useState<string>("");
  const [itemToFollow, setItemToFollow] = useState<Item>({
    id: 0,
    name: "None",
  });

  useEffect(() => {
    ItemsApi.getAllItems()
      .then((response: Item[]) => {
        setItems(response);
        // HERE WE SET THE ITEM TO FOLLOW TO FIRST ITEM IN THE ARRAY
        setItemToFollow(response[0]);
      })
      .catch((error: Error | AxiosError) => {
        setError(error.message);
      });
  }, []);

  const followItem = () => {
    ItemsApi.followItem(itemToFollow.id).then((response) => {
      // RESPONSE IS NOT RELEVEANT
      setFollowedItems([...followedItems, itemToFollow]);
    }).catch((error: Error | AxiosError) => {
      console.log(itemToFollow)
      setError(error.message);
    });
  };

  const findItemIdByName = (name: string): number => {
    const item: Item | undefined = items.find((item) => item.name === name);
    return item === undefined ? 0 : item.id;
  };

  return (
    <Box height="90vh">
      <Box height="100px" />
      <Flex>
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
              >
                {item.name}
              </option>
            ))}
          </Select>
        )}
        <Button onClick={followItem}>Follow</Button>
      </Flex>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {followedItems.map((item: Item) => (
          <Chart key={item.id} item={item} />
        ))}
        {error.length === 0 ? null : (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        )}
      </Flex>
    </Box>
  );
};

export default UserHome;
