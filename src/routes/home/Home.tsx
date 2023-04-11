import { ReactElement } from "react";
import { FeatureBox } from "../../components/LandingInfo/FeatureBox";
import { WelcomeBox } from "../../components/LandingInfo/WelcomeBox";

const Home = (): ReactElement => {
  return (
    <>
      <WelcomeBox />
      <FeatureBox />
    </>
  );
};

export default Home;
