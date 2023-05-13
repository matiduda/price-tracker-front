import { ReactElement, useContext, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import LoginModal from "../Modals/LoginModal";
import { AuthContext } from "../../api/AuthApi";
import Logout from "./Logout";
import RegisterModal from "../Modals/RegisterModal";

export const Navbar = (): ReactElement => {
  const [authenticated, setAuthenticated] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    setAuthenticated(authContext.authenticated);
  }, [authContext]);

  return (
    <Flex
      justifyContent="right"
      opacity={0.9}
      columnGap={5}
      right={0}
      padding={3}
    >
      {authenticated ? (
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
