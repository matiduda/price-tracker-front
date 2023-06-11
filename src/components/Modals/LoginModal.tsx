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
import { ReactElement, useContext, useState, useEffect } from "react";
import { AuthApi, AuthContext, LoginResponse } from "../../api/AuthApi";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { paths } from "../../utils/paths";
import { FormInput } from "../formInput/FormInput";
import { Subscription, SubscriptionApi } from "../../api/SubscriptionApi";

const LoginModal = (): ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const login = () => {
    AuthApi.login(username, password)
      .then((loginResponse: LoginResponse) => {
        localStorage.setItem("token", loginResponse.access_token);
        authContext.setAuthenticated(true);
        SubscriptionApi.getSubscription()
          .then((subscription: Subscription) => {
            handleClose();
            navigate(subscription === null ? paths.subscription : paths.user);
          })
          .catch((error: Error | AxiosError) => {
            if (axios.isAxiosError(error)) {
              setError("Error while fetching subscription info");
            }
          });
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          setError("Incorrect username or password");
        }
      });
  };

  const handleGoogleLogin = () => {
    const link = document.createElement("a");
    link.href = "http://127.0.0.1:8000/auth/google_signin/";
    //link.target = "_blank"; // Opens the URL in a new tab/window
    link.click();
  };

  const handleClose = () => {
    setUsername("");
    setPassword("");
    setError("");
    onClose();
  };

  useEffect(() => {
    const checkAccessToken = () => {
      const params = new URLSearchParams(window.location.search);
      const accessToken = params.get("access_token");
      if (accessToken) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
        localStorage.setItem("token", accessToken);
        authContext.setAuthenticated(true);
        SubscriptionApi.getSubscription()
          .then((subscription: Subscription) => {
            navigate(subscription === null ? paths.subscription : paths.user);
          })
          .catch((error: Error | AxiosError) => {
            if (axios.isAxiosError(error)) {
              setError("Error while fetching subscription info");
            }
          });
      }
    };
    checkAccessToken();
  }, []);

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
            <Button onClick={handleGoogleLogin} width={"fit-content"} mx={"auto"} my={4} p={2}>
              Continue with Google
            </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
