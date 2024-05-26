// filterSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://664faeadec9b4a4a602f91b7.mockapi.io/';

export const fetchFilters = createAsyncThunk('filters/fetchFilters', async () => {
  try {
    console.log('Fetching filters from: ', axios.defaults.baseURL + '/filters');
    const response = await axios.get('/filters');
    return response.data;
  } catch (error) {
    console.error('Fetch filters error: ', error);
    throw error;
  }
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        // Tutaj możesz dodać odpowiednie akcje, gdy żądanie jest w trakcie wykonywania
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        // Tutaj możesz dodać odpowiednie akcje, gdy żądanie zakończyło się sukcesem
      })
      .addCase(fetchFilters.rejected, (state) => {
        // Tutaj możesz dodać odpowiednie akcje, gdy żądanie zakończyło się niepowodzeniem
      });
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
