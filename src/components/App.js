import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Container from './Container';
import SubmitForm from './SubmitForm';
import ContactList from './ContactList';
import '../index.css';

class App extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  state = {
    contacts: [...this.props.contacts],
    filter: '',
  };

  AddContactOnSubmit = data => {
    const contact = {
      name: data.name.toLowerCase(),
      number: data.number,
      id: data.id,
    };

    this.setState(preventState => ({
      contacts: [contact, ...preventState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <SubmitForm submittedProps={this.AddContactOnSubmit} />
        <h1>Contacts</h1>
        <ContactList contacts={contacts} />
      </Container>
    );
  }
}

export default App;
