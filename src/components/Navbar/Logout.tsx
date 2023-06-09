import { Button } from "@chakra-ui/react";
import { paths } from "../../utils/paths";
import { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../api/AuthApi";

const Logout = (): ReactElement => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext.setAuthenticated(false);
    localStorage.clear();
  };

  return (
    <Link to={paths.home}>
      <Button onClick={handleLogout}>Log out</Button>
    </Link>
  );
};

export default Logout;
