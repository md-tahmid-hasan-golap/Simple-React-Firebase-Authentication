import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
