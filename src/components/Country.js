import React,{useContext} from "react";
import { Link } from "react-router-dom";
import themeContext from "../ThemeContext";
import "./country.css";

function Country(props) {
  let { flag, nam, population, region, capital, handle, country } = props;

  const change = () => {
    const handleSwitch = handle;
    handleSwitch(country);
  };
  const themes = useContext(themeContext)

  return (
    <div className="country-container" onClick={change} style={themes}>
      <Link to={"/country-detail/" + nam}>
        <div className="country-card">
          <div className="flag">
            <img src={flag} alt={`flag of ${nam}`} />
          </div>
          <div className="info" style={themes}>
            <h3>{nam}</h3>
            <p><span> Poulation :</span> {population}</p>
            <p>Region : {region}</p>
            <p>Capital : {capital}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Country;
