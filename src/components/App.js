import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Container from './Container';
import SubmitForm from './SubmitForm';
import '../index.css';

class App extends Component {
  state = { contacts: [], name: '' };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <SubmitForm />
      </Container>
    );
  }
}

export default App;
