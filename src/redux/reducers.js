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

export const contactsReducer = (state = initialContacts, action) => {
    switch (action.type) {
        case 'contacts/items/addContact':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: [...state.contacts.items, action.payload]
                }
            };
            
        case 'contacts/items/deleteContact':
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items.filter((contact) => contact.id !== action.payload)
                }
            };
    
        default:
            return state;
        }
}