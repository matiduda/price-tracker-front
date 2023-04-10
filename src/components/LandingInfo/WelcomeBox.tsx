import { ReactElement } from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Square,
  Text,
  theme,
} from "@chakra-ui/react";
import { colors } from "../../theme";

export const WelcomeBox = (): ReactElement => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      flexDirection="column"
      columnGap={5}
      width="fit-content"
      margin="auto"
      borderRadius="30"
      color="white"
      mt={10}
    >
      <Flex width="100%" height="30px" alignItems="center">
        <Divider
          width="100px"
          size="5px"
          borderWidth={"1px"}
          borderColor="#3370bb"
        />
        <Text ml="4" as="b" fontSize="2xs" color={colors.primary}>
          WELCOME
        </Text>
      </Flex>

      <Heading size={{ base: "3xl", lg: "4xl" }}>Prices from space</Heading>
      <Flex mt="7">
        <Box flexGrow="1" width="55%" />
        <Box flexGrow="1">
          <Text fontSize="11pt" minW="250px" maxW="500px" align="left">
            <b>
              Here you can keep track of how prices of your favourite products
              change over time. Sign up today and start monitoring changes!
            </b>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
