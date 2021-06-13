import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import PhonebookForm from './components/PhonebookForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Container from './components/Container';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const contact = {
      id: uuidv4(),
      name: newContact.name,
      number: newContact.number,
    };

    contacts.find(({ name }) => name === newContact.name)
      ? alert('This contact already exist')
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = removableContactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== removableContactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
    this.filterContacts();
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedContactSnippet = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContactSnippet),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList list={filteredContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
