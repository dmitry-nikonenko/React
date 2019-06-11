import React from 'react';

const SearchForm = ({ inputCheck }) => (
  <form className="search-form">
    <input
      onChange={inputCheck}
      type="text"
      autoComplete="off"
      placeholder="Search images..."
    />
  </form>
);

export default SearchForm;
