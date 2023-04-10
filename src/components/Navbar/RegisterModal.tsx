import { AuthApi } from "../../api/AuthApi";
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
import { FormInput } from "../formInput/FormInput";
import { paths } from "../../utils/paths";
import axios, { AxiosError } from "axios";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterModal = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signup = () => {
    AuthApi.signup(name, surname, email, password)
      .then((response: string) => {
        localStorage.setItem("token", response);
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
    setName("");
    setSurname("");
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
            <FormInput autofocus={true} setValue={setName} element="Name" />
            <FormInput
              autofocus={false}
              setValue={setSurname}
              element="Surname"
            />
            <FormInput autofocus={false} setValue={setEmail} element="Email" />
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
