import React, { useContext } from "react";
import { Link } from "react-router-dom";
import themeContext from "../ThemeContext";
import "./countryDetail.css";

function CountryDetail(props) {
  const { handle, country } = props;
  const change = () => {
    const handleSwitch = handle;

    handleSwitch(country);
  };
  const themes = useContext(themeContext);

  return (
    <>
   
    <div className="card-container" style={themes}>
    <div className="head-button" >
        <Link to="/">
          <button onClick={change} style={themes}>
            <i className="fas fa-long-arrow-alt-left"></i>Back
          </button>
        </Link>
      </div>
      <div className="content-wrap">
        <div className="flag">
          <img src={country.flag} alt="" />
        </div>
        <div className="detail-wrap">
          <h2>{ country.name}</h2>
          <div className="content-details">
          <div className="left-detail">
            <p>
              <span>Native Name :</span>
              {country.nativeName}
            </p>
            <p>
              <span>Population :</span>
              {country.population}
            </p>
            <p>
              <span>Region :</span>
              {country.region}
            </p>
            <p>
              <span>Sub Region</span>
              {country.subregion}
            </p>
            <p>
              <span>Capital</span>
              {country.capital}
            </p>
          </div>
          <div className="right-detail">
            <p>
              <span>Currencies :</span>
              {country.currencies[0].code}
            </p>
            <p>
              <span>Top Level Domain :</span>
              {country.demonym}
            </p>
            <p>
              <span>Languages :</span>
              {country.languages[0].name}
            </p>
          </div>
          </div>
          <div className="border-countries">
            <span>Border Countries :</span>
            <button>{country.borders[0]}</button>
            <button>{country.borders[1]}</button>
            <button>{country.borders[2]}</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CountryDetail;
