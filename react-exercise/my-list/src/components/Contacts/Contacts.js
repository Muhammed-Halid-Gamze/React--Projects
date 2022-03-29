import React from 'react';
import List from "./List/List";
import Form from "./Form/Form";
import { useState, useEffect } from 'react'; 

const Contacts = () => {
    const [contacts, setContacts] = useState([
      {
        fullName:"Mehmet",
        phoneNumber:"123123"
      },{
        fullName:"ahmet",
        phoneNumber:"321321"
      },{
        fullName:"hatice",
        phoneNumber:"485923"
      }



    ]);

    useEffect(() => {
        console.log(contacts)
    },[contacts])


  return (
    <div>
        <List contacts={contacts}/>
        <Form addContact = {setContacts} contacts={contacts}/>


    </div>
  )
}

export default Contacts