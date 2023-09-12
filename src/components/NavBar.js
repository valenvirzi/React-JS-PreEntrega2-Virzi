import React from "react";
import "./NavBar.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="nav">
        <NavLinks />
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
