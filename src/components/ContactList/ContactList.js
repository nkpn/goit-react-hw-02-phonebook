import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={style.Contacts__container}>
      <ul className={style.Contact__list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={style.Contact__item}>
              {contact.name} : {contact.number}
              <button
                type="button"
                onClick={() => {
                  deleteContact(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
