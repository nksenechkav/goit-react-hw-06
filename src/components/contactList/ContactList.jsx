import Contact from "../contact/Contact";
import css from "./ContactList.module.scss";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;