import React from "react";
import { Link } from "react-router-dom";
import "./country.css";

function Country(props) {
  let { flag, nam, population, region, capital, handle, country } = props;

  const change = () => {
    const handleSwitch = handle;
    handleSwitch(country);
  };

  return (
    <div className="country-container" onClick={change}>
      <Link to={"/country-detail/" + nam}>
        <div className="country-card">
          <div className="flag">
            <img src={flag} alt={`flag of ${nam}`} style={{ width: "40px" }} />
          </div>
          <div className="inf0">
            <h3>{nam}</h3>
            <p>{population}</p>
            <p>{region}</p>
            <p>{capital}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Country;
