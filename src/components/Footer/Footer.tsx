import { ReactElement } from "react";
import { Flex, Text } from "@chakra-ui/react";

export const Footer = (): ReactElement => {
  return (
    <Flex
      height="200px"
      color="white"
      opacity={0.9}
      mt={10}
      bgColor="black"
      padding={5}
      alignItems="center"
      justifyContent="center"
    >
      <Text as="h2" verticalAlign="middle">
        @ 2023 Prices From Space. All rights reserved
      </Text>
    </Flex>
  );
};
