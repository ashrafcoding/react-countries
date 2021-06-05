import React,{useContext} from "react";
import themeContext from "../ThemeContext";

import './search.css'

function Search({ search, inputValue }) {
  const themes = useContext(themeContext);

  return (
    <div className="search-bar">
      <i className="fas fa-search"></i>
      <input type="text" name="search" value={inputValue} onChange={search} placeholder="Searc for acountry" style={themes}/>
    </div>
  );
}

export default Search;
