import React from "react";
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <h3>Where in the world</h3>
        <div className="theme">
          <div className="theme-icon far fa-moon"></div>
          <h5>Dark Mode</h5>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
