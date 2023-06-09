import { ReactElement, useContext } from "react";
import { Flex } from "@chakra-ui/react";
import LoginModal from "../Modals/LoginModal";
import { AuthContext } from "../../api/AuthApi";
import Logout from "./Logout";
import RegisterModal from "../Modals/RegisterModal";

export const Navbar = (): ReactElement => {
  const authContext = useContext(AuthContext);

  return (
    <Flex
      justifyContent="right"
      opacity={0.9}
      columnGap={5}
      right={0}
      padding={3}
    >
      {authContext.authenticated ? (
        <Logout />
      ) : (
        <>
          <RegisterModal />
          <LoginModal />
        </>
      )}
    </Flex>
  );
};
