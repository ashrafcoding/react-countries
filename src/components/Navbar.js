import React, {useContext} from "react";
import themeContext from "../ThemeContext";
import './navbar.css'

function Navbar(props) {
  const themes = useContext(themeContext)

  return (
    <div className="navbar" style={themes} >
      <div className="container">
        <h3>Where in the world?</h3>
        <div className="theme" onClick={props.toggle}>         
          <div className={themes.color === "var(--mutual)" ? "theme-icon far fa-sun" : "theme-icon far fa-moon"}></div>
        <h5>{themes.color === "var(--mutual)" ? "Light Mode" : "Dark Mode"}</h5>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
