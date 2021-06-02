import React from "react";

function Search({ search, inputValue }) {
  return (
    <div className="search-bar">
      <input type="text" name="search" value={inputValue} onChange={search} />
    </div>
  );
}

export default Search;
