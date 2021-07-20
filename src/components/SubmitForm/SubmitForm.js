import React, { Component } from 'react';
import s from './SubmitForm.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

class SubmitForm extends Component {
  state = { name: '', number: '', id: '' };

  uniqeID = shortid();

  handleInputChange = ({ target }) => {
    const { name, value, id } = target;
    this.setState({ [name]: value, id: id });
  };

  handleSubmit = event => {
    event.preventDefault();

    //* Передаем в пропс чтоб прочитать в App
    this.props.submittedProps({
      name: event.currentTarget.name.value,
      number: event.currentTarget.number.value,
      id: shortid(),
    });

    console.log(this.props);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    return (
      <>
        <div className={s.Div}>
          <form className={s.Form} onSubmit={this.handleSubmit}>
            <label className={s.Label} htmlFor={this.uniqeID}>
              Name
              <input
                type="text"
                name="name"
                className={s.Input}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={this.state.name}
                onChange={this.handleInputChange}
                id={shortid()}
              />
            </label>
            <label className={s.Label}>
              Number
              <input
                type="tel"
                className={s.Input}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={this.handleInputChange}
                value={this.state.number}
                id={shortid()}
              />
            </label>
            <button type="submit" className={s.Button}>
              Add to contacts
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default SubmitForm;
