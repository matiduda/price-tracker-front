import { ReactElement } from "react";
import { Flex, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const FeatureBox = (): ReactElement => {
  return (
    <Flex
      mt={10}
      flexDirection="column"
      color="white"
      alignItems="center"
      justifyContent="center"
    >
      <Text as="b" fontSize="4xl" mb={5}>
        Featuring:
      </Text>
      <List spacing={3}>
        <ListItem fontSize={{ base: "18px", md: "24px", lg: "30px" }}>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Price update every day
        </ListItem>
        <ListItem fontSize={{ base: "18px", md: "24px", lg: "30px" }}>
          <ListIcon as={CheckCircleIcon} color="green.500" />A huge variety of
          products to track
        </ListItem>
        <ListItem fontSize={{ base: "18px", md: "24px", lg: "30px" }}>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Prices from reliable sources
        </ListItem>
        <ListItem fontSize={{ base: "18px", md: "24px", lg: "30px" }}>
          <ListIcon as={CheckCircleIcon} color="green.500" />A one month free
          trial
        </ListItem>
      </List>
    </Flex>
  );
};
