import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsSlice'; // Upewnij się, że to jest poprawny plik
import { setFilter } from '../redux/filterSlice'; // Poprawiony import
import Form from './Form/Form';
import { Contacts } from './Contacts/contacts'; // Poprawiona ścieżka
import { Filter } from './Filter/Filter'; // Upewnij się, że importujesz poprawnie
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.main}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={(e) => dispatch(setFilter(e.target.value))} />
      <Contacts contacts={contacts} />
    </div>
  );
};

export default App;
