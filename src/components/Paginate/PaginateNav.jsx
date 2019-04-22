import React from 'react';
import './PaginateNav.css';

const PaginateNav = ({ hidden, pageNumber, maxPage, onClick }) => {
  return (
    hidden
    ? ''
    : (
      <nav className="paginate-nav">
        {pageNumber === 1 ? '' : <button className="paginate-btn" onClick={() => onClick('prev')}>Previous</button> }
        {pageNumber === maxPage ? '' : <button className="paginate-btn" onClick={() => onClick('next')}>Next</button> }
      </nav>
    )
  );
};

export default PaginateNav;
