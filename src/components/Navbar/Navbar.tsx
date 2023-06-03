import { ReactElement, useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import LoginModal from "../Modals/LoginModal";
import { AuthContext } from "../../api/AuthApi";
import Logout from "./Logout";
import RegisterModal from "../Modals/RegisterModal";
import { useNavigate } from "react-router-dom";
import { paths } from "../../utils/paths";

export const Navbar = (): ReactElement => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.authenticated) {
      navigate(paths.user);
    }
  }, []);

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
