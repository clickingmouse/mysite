import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper light-blue lighten-4">
        <div className="container">
          <NavLink to="/" className="brand-logo">
            My Site
          </NavLink>
          <NavLink
            to="#"
            className="sidenav-trigger"
            data-target="mobile-links"
          >
            <i className="material-icons">menu</i>
          </NavLink>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-links">
        <li>
          <NavLink to="#">Home</NavLink>
        </li>
        <li>
          <NavLink to="#">About</NavLink>
        </li>
        <li>
          <NavLink to="#">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
