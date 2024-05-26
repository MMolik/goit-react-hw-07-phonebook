import React from 'react';
import PropTypes from 'prop-types';
import css from './contacts.module.css'; // Zakładając, że nazwa pliku to 'contacts.module.css'

export const Contacts = ({ contacts, deleteContact }) => (
  <ul className={css.contacts}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        {name}: {number}
        <button className={css.btn} onClick={() => deleteContact(id)}>
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
  deleteContact: PropTypes.func.isRequired,
};
