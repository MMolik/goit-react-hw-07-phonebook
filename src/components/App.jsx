// src/components/App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../redux/contactsSlice'; // Zaktualizowana ścieżka
import css from './App.module.css';
import Form from './Form/Form';
import { Contacts } from './Contacts/contacts';
import { Filter } from './Filter/Filter';
import { setFilter } from '../redux/filterSlice'; // Zaktualizowana ścieżka

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.main}>
      <h1>Phonebook</h1>
      <Form addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={handleFilterChange} />
      <Contacts deleteContact={handleDeleteContact} contacts={filterContacts()} />
    </div>
  );
};

export default App;
