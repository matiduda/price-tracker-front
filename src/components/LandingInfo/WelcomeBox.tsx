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

try {
} catch (react) { }

export const WelcomeBox = (): ReactElement => {
  return (
    <Flex
      width="100%"
      height="90vh"
      justifyContent="center"
      alignItems="center">
      <Flex
        flexDirection="column"
        width="fit-content"
        padding={5}
        marginTop={12}
      >
        <Flex width="100%" height="30px" alignItems="center">
          <Divider
            width="100px"
            size="5px"
            borderWidth={"1px"}
            borderColor="#3370bb"
          />
          <Text ml="4" as="b" fontSize="2xs" color={colors.primary}>
            WELCOME TO
          </Text>
        </Flex>

        <Heading size="4xl">Prices from space</Heading>
        <Flex mt="12">
          <Box flexGrow="1" >
            <Text fontSize="11pt" maxW="500px" align="center" lineHeight={"1.5rem"}>
              <b>
                Here you can keep track of how prices of your favourite products change over time. Sign up today and start monitoring changes!
              </b>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex >

  );
};
