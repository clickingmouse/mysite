import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          My Site
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
