import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import themeContext from "../ThemeContext";
import "./countryDetail.css";

function CountryDetail() {
  const [country, setCountry] = useState()
  let { params } = useParams();

  useEffect(() => {
    axios
    .get(`https://restcountries.eu/rest/v2/name/${params}`)
    .then(res => setCountry(res.data[0])
    )
  }, [params])

  const themes = useContext(themeContext);

  return  (
   
    <>
    {country &&
      <div className="card-container" style={themes}>
        <div className="head-button">
          <Link to="/">
            <button  style={themes}>
              <i className="fas fa-long-arrow-alt-left"></i>Back
            </button>
          </Link>
        </div>
        <div className="content-wrap">
          <div className="flag">
            <img src={country.flag} alt="" />
          </div>
          <div className="detail-wrap">
            <h2>{country.name}</h2>
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
      }
    </> 
  ) 
}

export default CountryDetail;
