import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <div className={style.Contacts__container}>
      <ul className={style.Contact__list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={style.Contact__item}>
              {contact.name} : {contact.number}
              <button type="button">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
