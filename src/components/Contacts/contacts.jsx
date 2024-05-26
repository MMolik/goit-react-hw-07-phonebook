import React from 'react';
import PropTypes from 'prop-types';
import css from './contacts.module.css';

export const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={css.contacts}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        {name}: {number}
        <button className={css.btn} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
