import { ReactElement, useEffect, useState } from "react";
import { ItemsApi } from "../../api/ItemsApi";
import { Button, Flex, Select, background } from "@chakra-ui/react";

type Item = {
  id: number;
  name: string;
};

const UserHome = (): ReactElement => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item>({
    id: 0,
    name: "None",
  });

  useEffect(() => {
    ItemsApi.getAllItems().then((response: Item[]) => {
      setItems(response);
    });
  }, []);

  const followItem = () => {
    ItemsApi.followItem(selectedItem.id).then((response) => {
      console.log(response);
    });
  };

  const findItemIdByName = (name: string): number => {
    const item: Item | undefined = items.find((item) => item.name === name);
    return item === undefined ? 0 : item.id;
  };

  return (
    <>
      <Flex>
        {items.length === 0 ? null : (
          <Select
            placeholder="Select product to follow"
            bg={"black"}
            onChange={(e) =>
              setSelectedItem({
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
    </>
  );
};

export default UserHome;
