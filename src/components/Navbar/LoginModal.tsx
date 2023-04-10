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
import { ReactElement, useState } from "react";
import { AuthApi, AuthResponse } from "../../api/AuthApi";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { paths } from "../../utils/paths";
import { FormInput } from "../formInput/FormInput";

const LoginModal = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = () => {
    AuthApi.login(email, password)
      .then((response: AuthResponse) => {
        // RESPONSE IS JWT TOKEN (I THINK WE CAN STORE IT IN LOCAL STARAGE)
        console.log(response.access_token);
        localStorage.setItem("token", response.access_token);
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
    setEmail("");
    setPassword("");
    setError("");
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Log in</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent textColor={"black"}>
          <ModalHeader>Enter your email and password</ModalHeader>
          <ModalCloseButton onClick={handleClose} />
          <ModalBody pb={6}>
            <FormInput autofocus={true} setValue={setEmail} element="Email" />
            <FormInput
              autofocus={false}
              setValue={setPassword}
              element="Password"
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
