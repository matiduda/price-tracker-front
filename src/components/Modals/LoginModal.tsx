import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  AlertIcon,
  Alert,
  AlertTitle,
} from "@chakra-ui/react";
import { ReactElement, useContext, useState } from "react";
import { AuthApi, AuthContext, LoginResponse } from "../../api/AuthApi";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { paths } from "../../utils/paths";
import { FormInput } from "../formInput/FormInput";

const LoginModal = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const login = () => {
    AuthApi.login(username, password)
      .then((response: LoginResponse) => {
        console.log(response);
        localStorage.setItem("token", response.access_token);
        authContext.setAuthenticated(true);
        handleClose();
        navigate(paths.user);
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        }
      });
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setError("");
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Log in</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent textColor={"black"}>
          <ModalHeader>Enter your username and password</ModalHeader>
          <ModalCloseButton onClick={handleClose} />
          <ModalBody pb={6}>
            <FormInput
              autofocus={true}
              setValue={setUsername}
              element="Username"
              type="text"
            />
            <FormInput
              autofocus={false}
              setValue={setPassword}
              element="Password"
              type="password"
            />
          </ModalBody>
          {error.length === 0 ? null : (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={login}>
              Log in
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
