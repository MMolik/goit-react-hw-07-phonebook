import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </label>
      <button type="submit" className={css.button}>Add contact</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
