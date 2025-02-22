import React, { useState } from 'react';
import './searchBar.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      onSearch(query);
      setQuery('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search">
    <div className="search-box">
      <div className="search-field">
        <input  
        className='input'
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder='Buscar Ciudad'
         />
          <button className="btn-icon-content" onClick={handleSearch}>
            <i className="search-icon">
              <svg xmlns="://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#fff"></path></svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
