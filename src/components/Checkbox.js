import React from 'react';
import './Checkbox.css';

const Checkbox = ({ type = 'checkbox', value, name, checked, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

export default Checkbox;
