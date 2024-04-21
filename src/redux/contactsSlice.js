import { createSlice } from "@reduxjs/toolkit";

const initialContacts = {
    contacts: {
		items: [
            {id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
            {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
            {id: "id-3", name: "Eden Clements", number: "645-17-79"},
            {id: "id-4", name: "Annie Copeland", number: "227-91-26"}
        ]
	},
}

const contactsSlice = createSlice({
  name: "contacts/items",
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => {
        state.contacts.items.push(action.payload);
      },
    deleteContact: (state, action) => {
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
    },
  },
});


// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;