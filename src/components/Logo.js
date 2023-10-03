import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link className="nav__logo-a" to="/">
      <img className="nav__logo-img" src="./logo.png" alt="Logo"></img>
    </Link>
  );
};

export default Logo;
