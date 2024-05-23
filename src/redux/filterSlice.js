import { createSlice } from '@reduxjs/toolkit';

// Funkcja do aktualizacji localStorage
const updateLocalStorage = (filter) => {
  localStorage.setItem('filter', filter);
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: JSON.parse(localStorage.getItem('filter')) || '',
  reducers: {
    setFilter: (state, action) => {
      state = action.payload;
      updateLocalStorage(action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
