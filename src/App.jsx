import './App.css';
import React, { Component } from "react";
import ContactList from './components/ContactsList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import ContactFilter from './components/ContactFilter/ContactFilter';

class App extends Component {
  state = {
    contacts: [{
      name: "Kiril",
      phone: 322112356,
      id: "1",
    }, {
      name: "Stepan",
      phone: 123124234,
      id: "2",
    },],
    filter: ''
  }

  addContact = (contact) => {
    this.setState(prevState => {
      return ({ contacts: [...contact, ...prevState.contacts] })
    })
  }

  addFilter = (filterValue) => {
    this.setState({ filter: filterValue })
  }

  render() {
    const filteredContacts = this.state.contacts.filter((contact) => contact.name.includes(this.state.filter))
    return (
      <>
        <ContactForm addContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <ContactFilter addFilter={this.addFilter}></ContactFilter>
        if (filteredContacts){
          <ContactList contacts={this.state.filter}></ContactList>
        } else{
          <ContactList contacts={this.state.contacts}></ContactList>
        }
      </>
    )
  }
}
export default App