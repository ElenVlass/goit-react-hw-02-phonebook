import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import PhonebookForm from './components/PhonebookForm';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <>
        <PhonebookForm onSubmit={this.addContact} />
        <Contacts contactList={this.state.contacts} />
      </>
    );
  }
}

export default App;
