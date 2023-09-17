import React from "react";
import "./NavBar.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="nav">
        <NavLinks />
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

export default NavBar;
