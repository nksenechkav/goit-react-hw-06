import { createAction } from "@reduxjs/toolkit";

  export const addContact = createAction('contacts/items/addContact')
  export const deleteContact = createAction('contacts/items/deleteContact')


  export const setFilter = (newValue) => {
    return {
      type: 'filters/setFilter',
      payload: newValue,
    };
  };