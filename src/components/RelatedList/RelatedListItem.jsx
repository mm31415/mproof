import React from 'react';
import './RelatedListItem.css';

const RelatedListItem = ({ content, onClick }) => (
  <li
    className="related-list-item"
    onClick={() => onClick(content)}
  >
    {content}
  </li>
);

export default RelatedListItem;
