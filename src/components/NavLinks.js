import React from "react";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav__links">
      <li className="nav__links-item">
        <a className="nav__item-link">Inicio</a>
      </li>
      <hr class="header__nav-hr"></hr>
      <li className="nav__links-item">
        <a className="nav__item-link">Productos</a>
      </li>
      <hr class="header__nav-hr"></hr>
      <li className="nav__links-item">
        <a className="nav__item-link">Contacto</a>
      </li>
    </ul>
  );
};

export default NavLinks;
