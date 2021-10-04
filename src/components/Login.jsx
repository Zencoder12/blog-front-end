import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <NavLink to="/login">
      <FontAwesomeIcon className="login-icon" icon={faSignInAlt} size="4x" />
    </NavLink>
  );
};

export default Login;
