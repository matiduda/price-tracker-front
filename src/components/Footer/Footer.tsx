import { ReactElement } from "react";
import { Flex, Text } from "@chakra-ui/react";

export const Footer = (): ReactElement => {
  return (
    <Flex
      height="50px"
      color="white"
      mt={10}
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
