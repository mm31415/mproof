import React, { useState, useEffect } from 'react';
import Search from './components/Search/Search';
import SearchList from './components/SearchList/SearchList';
import RelatedList from './components/RelatedList/RelatedList';
import { fetchData } from './utils/fetchData';
import { tempItems } from './utils/tempItems';
import './App.css';

const App = (props) => {

  const [loading, setLoading] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState('1');
  const [relatedItems, setRelatedItems] = useState([]);

  // useEffect(() => {
  //   setSearchItems(tempItems())
  // }, []);

  const search = (searchVal) => {
    setLoading(true);

    if (searchVal) {
      setPageNumber('1');
      setSearchValue(searchVal);
    }

    const values = {
      pageNumber: searchVal ? '1' : pageNumber,
      searchValue: searchVal || searchValue
    };

    fetchData(values.pageNumber, values.searchValue)
      .then(res => res.json())
      .then(data => {
        console.log(data.value);
        setSearchItems(data.value);
        setRelatedItems(data.relatedSearch);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="app">
      <header className="header"><h1>Yo, I heard you like to Search!</h1></header>
      <Search
        searchValue={searchValue}
        onChange={setSearchValue}
        onClick={search}
      />
      <SearchList
        loading={loading}
        list={searchItems}
      />
      <RelatedList
        loading={loading}
        list={relatedItems}
        onClick={search}
      />
    </div>
  );
}

export default App;
