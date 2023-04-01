import { ReactElement } from "react";
import { ParticleBackground } from "./components/Background/ParticleBackground";
import { Footer } from "./components/Footer/Footer";
import { FeatureBox } from "./components/LandingInfo/FeatureBox";
import { WelcomeBox } from "./components/LandingInfo/WelcomeBox";
import { Navbar } from "./components/Navbar/Navbar";

const App = (): ReactElement => {
  return (
    <>
      <Navbar />
      <WelcomeBox/>
      <FeatureBox/>
      <Footer/>
      <ParticleBackground/>
    </>
  )
};

export default App;
