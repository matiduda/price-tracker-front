import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

const App = (): ReactElement => {
  return (
    <>
      <Link to="/products">Go to products</Link>
    </>
  );
};

export default App;
