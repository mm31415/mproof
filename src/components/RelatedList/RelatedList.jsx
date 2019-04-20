import React from 'react';
import RelatedListItem from './RelatedListItem';
import LoadingIndicator from '../Loading/LoadingIndicator';
import './RelatedList.css';

const RelatedList = ({ loading, list, onClick }) => {

  const render = () => {
    if (loading) return <LoadingIndicator />;
    return (
      <ul className="related-list">
        {
          list.map((item) => (
            <RelatedListItem
              key={item}
              content={item}
              onClick={onClick}
            />
          ))
        }
      </ul>
    );
  };

  return(
    <section className="related-list-section">
      <h2 className="related-list-header">Related Searches</h2>
      { render() }
    </section>
  );
};

export default RelatedList;
