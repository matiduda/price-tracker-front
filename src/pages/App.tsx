import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ParticleBackground } from "../components/Background/ParticleBackground";
import { Footer } from "../components/Footer/Footer";
import { FeatureBox } from "../components/LandingInfo/FeatureBox";
import { WelcomeBox } from "../components/LandingInfo/WelcomeBox";

const App = (): ReactElement => {
  return (
    <>
      <WelcomeBox />
      <FeatureBox />
      <Link to="/products">Go to products</Link>
      <Footer />
      <ParticleBackground />
    </>
  );
};

export default App;
