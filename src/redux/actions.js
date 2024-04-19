export const addContact = (newContact) => {
    return {
      type: 'contacts/items/addContact',
      payload: newContact,
    };
  };
  
  export const deleteContact = (contact) => {
    return {
      type: 'contacts/items/deleteContact',
      payload: contact.id,
    };
  };
  