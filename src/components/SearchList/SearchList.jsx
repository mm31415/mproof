import React from 'react';
import SearchListItem from './SearchListItem';
import LoadingIndicator from '../Loading/LoadingIndicator';
import TopoGigio from '../Empty/TopoGigio';
import './SearchList.css';


const SearchResultList = ({ loading, list }) => {

  const render = () => {
    if (loading) return <LoadingIndicator />;
    if (!list.length) return <TopoGigio />;
    return (
      <React.Fragment>
        <ul className="search-result-list">
          {
            list.map(item => <SearchListItem key={item.url} item={item} />)
          }
        </ul>
      </React.Fragment>
    );
  };

  return (
    <section className="search-result-list-section">
      <h2 className="search-result-list-header">Search Results</h2>
      { render() }
    </section>
  );
};

export default SearchResultList;
