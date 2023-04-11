import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fonts from "./fonts/Fonts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Fonts />
    <App />
  </React.StrictMode>
);
