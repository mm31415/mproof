import React from 'react';
import './AutofillItem.css';

const AutofillItem = ({ value, onClick }) => (
  <li
    className="autofill-item"
    onClick={() => onClick(value)}
  >
    {value}
  </li>
);

export default AutofillItem;
