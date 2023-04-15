import { ReactElement } from "react";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router";
import { AuthContextProvider } from "./api/AuthApi";

const App = (): ReactElement => {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ChakraProvider>
  );
};

export default App;
