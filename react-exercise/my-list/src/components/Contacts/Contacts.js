import React from 'react';
import List from "./List/List";
import Form from "./Form/Form";
import { useState, useEffect } from 'react'; 

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts)
    },[contacts])


  return (
    <div>
        <List/>
        <Form addContact = {setContacts} contacts={contacts}/>


    </div>
  )
}

export default Contacts