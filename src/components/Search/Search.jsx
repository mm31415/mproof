import React, { useState } from 'react';
import Autofill from './Autofill';
import './Search.css';

const Search = ({ searchValue, onChange, onClick }) => {

  const [autoFill, setAutoFill] = useState([]);

  const handleChange = (e) => {
    const element = e.currentTarget;
    onChange(element.value);
  };

  return (
    <div className="search">
      <div className="search-input-wrapper">
        <input
          className="search-input"
          type="text"
          value={searchValue || ''}
          onChange={handleChange}
          placeholder="Search something"
        />
      <Autofill
        list={autoFill}
        onClick={onClick}
      />
      </div>
      <button
        className="search-btn"
        onClick={(e) => {
          if (!searchValue) return;
          onClick();
        }}
      >
        Search It!
      </button>
    </div>
  );
};

export default Search;
