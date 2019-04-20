import React from 'react';
import './Search.css';

const Search = ({ searchValue, onChange, onClick }) => (
  <div className="search">
    <input
      className="search-input"
      type="text"
      value={searchValue || ''}
      onChange={(e) => onChange(e.currentTarget.value)}
      placeholder="Search something"
    />
    <button
      className="search-btn"
      onClick={(e) => {
        if (!searchValue) return;
        console.log(searchValue);
        onClick();
      }}
    >
      Search It!
    </button>
  </div>
);

export default Search;
