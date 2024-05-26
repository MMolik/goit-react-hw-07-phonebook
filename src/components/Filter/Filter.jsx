import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChangeFilter }) => (
  <label className={css.text}>
    Find contacts by name
    <input
      className={css.newContacts}
      type="text"
      value={filter}
      onChange={onChangeFilter}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
