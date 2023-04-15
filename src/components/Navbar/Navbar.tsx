import { ReactElement, useContext, useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { AuthContext } from "../../api/AuthApi";
import Logout from "./Logout";

export const Navbar = (): ReactElement => {
  const [authenticated, setAuthenticated] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    setAuthenticated(authContext.authenticated);
  }, [authContext]);

  return (
    <Flex justifyContent="center" alignItems="center" padding={5} opacity={0.9}>
      <Flex marginLeft="auto" columnGap={5}>
        {authenticated ? (
          <Logout />
        ) : (
          <>
            <RegisterModal />
            <LoginModal />
          </>
        )}
      </Flex>
    </Flex>
  );
};
