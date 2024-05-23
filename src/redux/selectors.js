// selectors.js

// Funkcja `getContacts` jest selektorem, który zwraca listę kontaktów pobraną ze stanu aplikacji.
// Przyjmuje stan aplikacji jako argument i zwraca listę kontaktów.
export const getContacts = (state) => state.contacts.items;

// Funkcja `getFilter` jest selektorem, który zwraca stan filtra pobrany ze stanu aplikacji.
// Przyjmuje stan aplikacji jako argument i zwraca stan filtra.
export const getFilter = (state) => state.filter;
