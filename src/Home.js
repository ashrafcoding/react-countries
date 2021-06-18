import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Country from "./components/Country";
import Search from "./components/Search";
import "./App.css";
import themeContext  from "./ThemeContext"


function Home() {
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
   
    function handleSwitch(country) {
      setSwitchPage(!switchPage);
    }


  const themes = useContext(themeContext);

  
  const handleChoose = (e) => {
    const filteredSearch =
      countries.find((country) => {
         return country.name.toLowerCase().includes(e.target.value.toLowerCase()) ? country : null       
      });
    setFilterSearch([filteredSearch]);
  };


  return (
    <>        
        {switchPage && (
          <div className="head-wrap">
            <Search search={handleSearch} />
            <div className="flter-wrap">
            <select  className="filter-bar" style={themes} onChange={handleChoose}>
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
        <div className="content-search-wrap">
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
                  handle={handleSwitch}
                  country={c}
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
    </>
  );
}

export default Home;
