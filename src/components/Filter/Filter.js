import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={style.Label}>
      <p className={style.LabelText}>Filter:</p>{' '}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={style.Input}
      ></input>
    </label>
  );
};

export default Filter;
