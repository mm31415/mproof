import React from 'react';
import './PaginateNav.css';

const PaginateNav = ({ hidden, pageNumber, maxPage }) => {
  return (
    hidden
    ? ''
    : (
      <nav className="paginate-nav">
        {pageNumber === 1 ? '' : <button className="paginate-btn">Previous</button> }
        {pageNumber === maxPage ? '' : <button className="paginate-btn">Next</button> }
      </nav>
    )
  );
};

export default PaginateNav;
