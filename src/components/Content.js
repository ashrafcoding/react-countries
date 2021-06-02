import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import FilterBar from "./FilterBar";
import Search from "./Search";
import './content.css'

function Content() {
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

  return (
    <div>
        <div className="head-wrap">
        <Search search={handleSearch} />
      <FilterBar />
        </div>  
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

      {list.map((c, i) => {
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
    </div>
  );
}

export default Content;
