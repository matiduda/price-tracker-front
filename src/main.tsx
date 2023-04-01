import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import App from "./pages/App";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import theme from "./theme";
import Fonts from "./fonts/Fonts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<App />} />
            <Route path="products" element={<Products />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode >
);
