import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav__links">
      <li className="nav__links-item">
        <Link to="/" className="nav__item-link">
          Inicio
        </Link>
      </li>
      <hr class="header__nav-hr"></hr>
      <li className="nav__links-item">
        <Link to="/phones" className="nav__item-link">
          Celulares
        </Link>
      </li>
      <hr class="header__nav-hr"></hr>
      <li className="nav__links-item">
        <Link to="/tablets" className="nav__item-link">
          Tablets
        </Link>
      </li>
      <hr class="header__nav-hr"></hr>
      <li className="nav__links-item">
        <Link to="/smartwatch" className="nav__item-link">
          Smartwatch
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
