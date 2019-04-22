import React, { useState, useEffect } from 'react';
import Search from './components/Search/Search';
import SearchList from './components/SearchList/SearchList';
import RelatedList from './components/RelatedList/RelatedList';
import PaginateNav from './components/Paginate/PaginateNav';
import { fetchData } from './utils/fetchData';
import './App.css';

const App = (props) => {

  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPage, setMaxPage] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    if (searching) search();
  }, [searching]);

  const search = () => {
    console.log(pageNumber);
    setLoading(true);
    fetchData(pageNumber, searchValue)
      .then(res => res.json())
      .then(data => {
        if (pageNumber === 1) {
          setSearchItems(data.value);
          setRelatedItems(data.relatedSearch);
        }
        else setSearchItems([...searchItems, ...data.value]);

        if (data.value.length < 20) setMaxPage(pageNumber);
        if (searching) setSearching(false);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const handleSuggestedSearch = (value) => {
    setPageNumber(1);
    setMaxPage(null);
    setSearchValue(value);
    setSearching(true);
  };

  const handlePaginate = (action) => {
    if (action === 'next') {
      setPageNumber(pageNumber + 1);
      setSearching(true);
    } else {
      setPageNumber(pageNumber - 1);
    }
  }

  console.log(pageNumber);

  return (
    <div className="app">
      <header className="header"><h1>Yo, Search It!</h1></header>
      <Search
        searchValue={searchValue}
        onChange={setSearchValue}
        onClick={search}
      />
      <SearchList
        loading={loading}
        list={searchItems.slice((pageNumber - 1) * 20, (pageNumber - 1) * 20 + 20)}
      />
      <RelatedList
        loading={loading}
        list={relatedItems}
        onClick={handleSuggestedSearch}
      />
      <PaginateNav
        hidden={loading || !searchItems.length}
        pageNumber={pageNumber}
        maxPage={maxPage}
        onClick={handlePaginate}
      />
    </div>
  );
}

export default App;
