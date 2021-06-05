import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountryDetail from "./components/CountryDetail";
import axios from "axios";
import Country from "./components/Country";
import Search from "./components/Search";
import "./App.css";
import themeContext ,{themes} from "./ThemeContext"


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
  const [theme, setTheme] = useState(themes.dark)
  const [body, setBody] = useState({background: "var(--night-vdbl)"})
  const toggleTheme = ()=>{
    theme === themes.dark
    ? setTheme(themes.light)
     
    : setTheme(themes.dark)
    theme === themes.dark 
    ? setBody({background: "var(--light-vlgr)"})
    :setBody({background: "var(--night-vdbl)"})
    
  }
  
  console.log(body);

  return (
    <>
    <themeContext.Provider value={theme}>
      <div  style={body}>
      <Navbar toggle= {toggleTheme}/>
      <Router>
        <Route path="/" component={this} />
        <Route path="/country-detail/:params">
          <CountryDetail handle={handleSwitch} country={specificCountry} />
        </Route>
        {switchPage && (
          <div className="head-wrap">
            <Search search={handleSearch} />
            <div className="flter-wrap">
              <select name="filter" id="" className="filter-bar" style={theme}>
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
      </Router>
      </div>
    </themeContext.Provider>
    
    </>
  );
}

export default App;
