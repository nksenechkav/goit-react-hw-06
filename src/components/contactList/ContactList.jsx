import Contact from "../contact/Contact";
import css from "./ContactList.module.scss";
import { useSelector } from 'react-redux'

const ContactList = () => {
  
  const contacts = useSelector((state) => state.contacts.contacts.items);

  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;