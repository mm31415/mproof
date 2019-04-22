import React from 'react';
import AutofillItem from './AutofillItem';
import './Autofill.css';

const Autofill = ({ list, onClick }) => {
  return (
    <ul className="autofill-list">
      {
        list.map(value => (
          <AutofillItem
            key={value}
            value={value}
            onClick={onClick}
          />
        ))
      }
    </ul>
  );
};

export default Autofill;
