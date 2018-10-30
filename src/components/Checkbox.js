import React from 'react';
import './Checkbox.css';

const Checkbox = ({ type = 'checkbox', value, isChecked, onChange }) => (
  <input type={type} name="isChecked" checked={isChecked} onChange={onChange} />
);

export default Checkbox;
