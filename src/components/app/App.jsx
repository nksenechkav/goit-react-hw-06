import { useState } from 'react'
import ContactForm from '../contactForm/ContactForm'
import SearchBox from '../searchBox/SearchBox'
import ContactList from '../contactList/ContactList'

import './App.css'

function App() {

 

  // const contacts = useSelector((state) => {
  //   const savedContacts = window.localStorage.getItem("savedContacts");

  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return state.contacts;
  
  // });
  
  // const [contacts, setContacts] = useState (() => {
  //   const savedContacts = window.localStorage.getItem("savedContacts");

  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return initialContacts;
  
  // });

  const [filter, setFilter] = useState('');


  // useEffect(() => {
  //   window.localStorage.setItem("savedContacts", JSON.stringify(contacts));
  // }, [contacts]);


  // const addContact = (newContact) => {
  //   const action = {
  //     type: 'contacts/items/addContact',
  //     payload: newContact,
  //   };
  //   dispatch(action);

  //   // const updatedContacts = [...contacts, newContact];
  //   // setContacts(updatedContacts);
  //   // window.localStorage.setItem("savedContacts", JSON.stringify(updatedContacts));
  // };


  // const deleteContact = (id) => {
  //   const action = {
  //     type: 'contacts/items/deleteContact',
  //     payload: id,
  //   };
  //   dispatch(action);

    // const updatedContacts = [...contacts];
    // const index = updatedContacts.findIndex ((contact) => contact.id === id);
    // updatedContacts.splice(index, 1);
    // setContacts(updatedContacts);
    // window.localStorage.setItem("savedContacts", JSON.stringify(updatedContacts));
  // };


// const searchedContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );


  return (
    <div className='phonebook-container'>
       <h1>Phonebook</h1>
       <ContactForm/>
       <SearchBox value={filter} onFilter={setFilter}/>
       <ContactList/>
    </div>
  );
}

export default App