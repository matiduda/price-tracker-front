import { useContext } from "react";
import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../api/AuthApi";
import { WelcomeBox } from "../../components/LandingInfo/WelcomeBox";
import { paths } from "../../utils/paths";

const Home = (): ReactElement => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.authenticated) {
      navigate(paths.user);
    }
  }, []);

  return (
    <>
      <WelcomeBox />
    </>
  );
};

export default Home;
