import css from "./Contact.module.scss";
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = (contact) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.item}>
      <div>  
      <div className={css["icon-wrapper"]}> 
      <ImUser className="my-icon" size="24"/>
      <p className={css.info}>{contact.name}</p>
      </div>
      <div className={css["icon-wrapper"]}> 
      <ImPhone className="my-icon" size="24"/>
      <p className={css.info}>{contact.number}</p>
      </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
      </div>
  );
};

export default Contact;