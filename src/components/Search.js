import React from "react";

const Search = ({ handleSearch }) => (
  <input onChange={(e) => handleSearch(e.target.value)} type="text" />
);
export default Search;
