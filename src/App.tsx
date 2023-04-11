import { ReactElement } from "react";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router";

const App = (): ReactElement => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
};

export default App;
