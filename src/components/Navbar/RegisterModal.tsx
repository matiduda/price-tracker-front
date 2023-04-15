import {
  AuthApi,
  AuthContext,
  LoginResponse,
  SignupResponse,
} from "../../api/AuthApi";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Alert,
  AlertIcon,
  AlertTitle,
  ModalFooter,
} from "@chakra-ui/react";
import { FormInput } from "../FormInput/FormInput";
import { paths } from "../../utils/paths";
import axios, { AxiosError } from "axios";
import { ReactElement, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterModal = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const authContext = useContext(AuthContext);

  const signup = () => {
    AuthApi.signup(username, email, password)
      .then((response: SignupResponse) => {
        // THIS RESPONSE CONTAINS JSON WITH USER INFO, ID, AND ROLE
        localStorage.setItem("id", response.id.toString());
        localStorage.setItem("role", response.role);
        AuthApi.login(username, password)
          .then((response: LoginResponse) => {
            // THIS RESPONSE CONTAINS TOKEN
            console.log(response.access_token);
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
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        }
      });
  };

  const handleClose = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setError("");
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Sign up</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent textColor={"black"}>
          <ModalHeader>Create an account</ModalHeader>
          <ModalCloseButton onClick={handleClose} />
          <ModalBody pb={6}>
            <FormInput
              autofocus={false}
              setValue={setUsername}
              element="Username"
              type="text"
            />
            <FormInput
              autofocus={false}
              setValue={setEmail}
              element="Email"
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
            <Button colorScheme="blue" mr={3} onClick={signup}>
              Sign up
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterModal;
