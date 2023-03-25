import { ReactElement } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { RegisterModal } from "./RegisterModal";
import { LoginModal } from "./LoginModal";

export const Navbar = (): ReactElement => {
  return (
    <Box>
      <Flex
        bgColor="black"
        justifyContent="center"
        alignItems="center"
        padding={5}
      >
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl", lg: "4xl" }}
          color="white"
        >
          Prices from space
        </Heading>
        <Flex marginLeft="auto" columnGap={5}>
          <RegisterModal />
          <LoginModal />
        </Flex>
      </Flex>
    </Box>
  );
};
