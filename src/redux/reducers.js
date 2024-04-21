import { createReducer } from "@reduxjs/toolkit";

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

export const contactsReducer = createReducer(initialContacts, (bilder) => {
bilder
.addCase('contacts/items/addContact', (state, action) => {
    state.contacts.items.push(action.payload);
})
.addCase('contacts/items/deleteContact', (state, action) => {
    state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
});
}) 


const InitialFilters =  {
    filters: {
        name: ""
    }
}
  
export const filtersReducer = (state = InitialFilters, action) => {
    switch (action.type) {
      case 'filters/setFilter':
        return {
          ...state,
          name: action.payload,
        };
      default:
        return state;
    }
  };