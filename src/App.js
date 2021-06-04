import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryDetail from "./components/CountryDetail";
import axios from "axios";
import Country from "./components/Country";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data));
  }, []);

  let list = [];
  if (countries !== undefined) {
    for (let i = 1; i < 21; i++) {
      list.push(countries[i * Math.floor(Math.random() * 10)]);
    }
  }

  const [inputValue, setInputValue] = useState();
  const [filterSearch, setFilterSearch] = useState();

  const handleSearch = (e) => {
    setInputValue(e.target.value.toLowerCase());
    const filteredSearch =
      countries &&
      countries.filter((country) => {
        return country.name.toLowerCase().includes(inputValue);
      });
    setFilterSearch(filteredSearch);
  };

  const [switchPage, setSwitchPage] = useState(true);

  const [specificCountry, setSpecificCountry] = useState(null);

  function handleSwitch(country) {
    setSwitchPage(!switchPage);
    setSpecificCountry(country);
  }

  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" component={this} />
        <Route path="/country-detail/:params">
          <CountryDetail handle={handleSwitch} country={specificCountry} />
        </Route>
        {switchPage && (
          <div className="head-wrap">
            <Search search={handleSearch} />
            <div className="flter-wrap">
              <select name="filter" id="" className="filter-bar">
                {countries &&
                  countries.map((c, i) => {
                    return (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
        )}
        <div className="content-wrap">
          {filterSearch &&
            filterSearch.map((c, i) => {
              return (
                <Country
                  key={i}
                  flag={c.flag}
                  nam={c.name}
                  population={c.population}
                  region={c.region}
                  capital={c.capital}
                />
              );
            })}

          {switchPage &&
            list.map((c, i) => {
              return (
                <Country
                  key={i}
                  flag={c.flag}
                  nam={c.name}
                  population={c.population}
                  region={c.region}
                  capital={c.capital}
                  handle={handleSwitch}
                  country={c}
                />
              );
            })}
        </div>
      </Router>
    </>
  );
}

export default App;
