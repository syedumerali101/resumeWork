import { Button, Divider, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import PATHS from "../../router/paths";
import "./login.scss";

import { login } from "../../redux/actions/userLoginAction";

const Login = ({ location }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(`/${PATHS.DASHBOARD}`);
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login__container">
      <form className="login__container__form">
        <div className="login__container__title title--md">
          Sign in to Skilledger
        </div>
        <p className="login__container__desc">
          Enter your login to access Skilledger's fun!
        </p>
        <TextField
          className="login__container__form__field"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          className="login__container__form__field"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div onClick={(e) => submitHandler(e)} className="btn--primary">
          Log In
        </div>
        <p className="login__container__form__forgotPass">
          Forgot your <span>password</span>?
        </p>
        <p className="login__container__form__signUp">
          New to Skilledger?{" "}
          <Link
            to={`/${PATHS.REGISTER}`}
            className="login__container__form__signUp__link"
          >
            SIGN UP
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
