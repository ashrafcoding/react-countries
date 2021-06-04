import React from "react";
import { Link } from "react-router-dom";

function CountryDetail(props) {
  const { handle, country } = props;
  const change = () => {
    const handleSwitch = handle;

    handleSwitch(country);
  };

  return (
    <div className="card-container">
      <div className="head-button">
        <Link to="/">
          <button onClick={change}>
            <i className="fas fa-long-arrow-alt-left"></i>Back
          </button>
        </Link>
      </div>
      <div className="content-wrap">
        <div className="flag">
          <img src={country.flag} alt="" />
        </div>
        <div className="detail-wrap">
          <h2>{}</h2>
          <div className="left-detail">
            <h4>
              <span>Native Name :</span>
              {country.nativeName}
            </h4>
            <h4>
              <span>Population :</span>
              {country.population}
            </h4>
            <h4>
              <span>Region :</span>
              {country.region}
            </h4>
            <h4>
              <span>Sub Region</span>
              {country.subregion}
            </h4>
            <h4>
              <span>Capital</span>
              {country.capital}
            </h4>
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
          <div className="border-countries">
            <span>Border Countries :</span>
            <button>{country.borders[0]}</button>
            <button>{country.borders[1]}</button>
            <button>{country.borders[2]}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
