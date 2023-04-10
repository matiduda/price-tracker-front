import { ReactElement } from "react";
import { FeatureBox } from "../../components/landingInfo/FeatureBox";
import { WelcomeBox } from "../../components/landingInfo/WelcomeBox";

const Home = (): ReactElement => {
  return (
    <>
      <WelcomeBox />
      <FeatureBox />
    </>
  );
};

export default Home;
