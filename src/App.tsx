import { ReactElement } from "react";
import { ParticleBackground } from "./components/Background/ParticleBackground";
import { Navbar } from "./components/Navbar/Navbar";

const App = (): ReactElement => {
  return (
    <>
      <Navbar />
      <ParticleBackground/>
    </>
  )
};

export default App;
