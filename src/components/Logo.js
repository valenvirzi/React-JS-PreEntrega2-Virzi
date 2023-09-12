import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <a className="nav__logo-a" href="#">
      <img className="nav__logo-img" src="./logo.png" alt="Logo"></img>
    </a>
  );
};

export default Logo;
