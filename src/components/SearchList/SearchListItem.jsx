import React from 'react';
import NoImage from '../Empty/NoImage';
import './SearchListItem.css';

const SearchListItem = ({ item }) => (
  <li className="search-list-item">
    <div className="search-img-wrapper">
      {
        item.image.thumbnail
        ? <img src={item.image.thumbnail} alt={item.title} />
        : <NoImage />
      }
    </div>
    <div><a href={item.url}>{item.title}</a></div>
    <div>{item.description}</div>
  </li>
);

export default SearchListItem;
