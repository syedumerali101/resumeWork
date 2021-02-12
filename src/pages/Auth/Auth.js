import React from "react";
import { Link, Switch, useLocation } from "react-router-dom";
import Person from "../../assets/images/person.png";
import Person2 from "../../assets/images/person2.png";
import { RouteWithSubRoutes } from "../../router";
import "./auth.scss";

const Auth = ({ routes }) => {
  console.log("route", routes);
  const { pathname } = useLocation();
  return (
    <div className="auth__container">
      <div className="auth__container__left">
        {/* <Link to="/login">Login</Link> */}
        {/* <Link to="/register">Register</Link> */}
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))}
        </Switch>
      </div>
      <div className="auth__container__right">
        <img
          className="auth__container__right__img"
          src={pathname.includes("register") ? Person2 : Person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Auth;
