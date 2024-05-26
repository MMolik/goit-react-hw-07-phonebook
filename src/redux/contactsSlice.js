import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Ustawienie bazowego URL dla axios
axios.defaults.baseURL = 'https://664faeadec9b4a4a602f91b7.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await axios.post('/contacts', contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
