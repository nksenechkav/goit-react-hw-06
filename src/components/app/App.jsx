import { useState } from 'react'
import { useEffect } from 'react'
import initialContacts from '../contacts.json'
import ContactForm from '../contactForm/ContactForm'
import SearchBox from '../searchBox/SearchBox'
import ContactList from '../contactList/ContactList'

import './App.css'

function App() {
  const [contacts, setContacts] = useState (() => {
    const savedContacts = window.localStorage.getItem("savedContacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  
  });

  const [filter, setFilter] = useState('');


  useEffect(() => {
    window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);


  const addContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    window.localStorage.setItem("savedContacts", JSON.stringify(updatedContacts));
  };


  const deleteContact = (id) => {
    const updatedContacts = [...contacts];
    const index = updatedContacts.findIndex ((contact) => contact.id === id);
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
    window.localStorage.setItem("savedContacts", JSON.stringify(updatedContacts));
  };


const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div className='phonebook-container'>
       <h1>Phonebook</h1>
       <ContactForm onAdd={addContact}/>
       <SearchBox value={filter} onFilter={setFilter}/>
       <ContactList contacts={searchedContacts} onDelete={deleteContact}/>
    </div>
  );
}

export default App