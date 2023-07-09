import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';

const contactsInitialState =
  JSON.parse(localStorage.getItem('phonebook')) || [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    const contactNames = state.map(contact => contact.name);
    if (contactNames.includes(action.payload.name))
      return alert(`${action.payload.name} is alredy in contacts`);

    state.push(action.payload);
    localStorage.setItem('phonebook', JSON.stringify(state));
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
    localStorage.setItem('phonebook', JSON.stringify(state));
  },
});

const filtersInitialState = { filter: '' };

export const filtersReducer = createReducer(filtersInitialState, {
  [filterContact]: (state, action) => {
    state.filter = action.payload;
  },
});
