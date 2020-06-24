import React from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logInAction, logOutAction } from "../actions/loginActions";

const Login = (props) => {
  //   const dispatch = useDispatch();
  //   const logIn = () => dispatch(logInAction());
  //   const logOut = () => dispatch(logOutAction());

  return (
    <>
      <button onClick={props.logIn}>Log in</button>
      <button onClick={props.logOut}>Log out</button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(logInAction()),
    logOut: () => dispatch(logOutAction()),
  };
};

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

// export default Login;
export default connect(null, mapDispatchToProps)(Login);
