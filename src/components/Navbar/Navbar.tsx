import { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

export const Navbar = (): ReactElement => {
  return (
    <Flex justifyContent="center" alignItems="center" padding={5} opacity={0.9}>
      <Flex marginLeft="auto" columnGap={5}>
        <RegisterModal />
        <LoginModal />
      </Flex>
    </Flex>
  );
};
