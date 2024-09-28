import { useEffect, useState } from 'react';
import css from './App.module.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import initialContacts from "../../../contacts.json"


export default function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  }
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const [filter, setFilter] = useState("");
  const ContactsYouHave = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  const addNewContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact])
  }

  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={css.container}>
      <h1 className={css.appname}>Phonebook</h1>
      <ContactForm addContact={addNewContact}/>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={ContactsYouHave} deleteContact={deleteContact} />
    </div>
  )
};