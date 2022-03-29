import React from "react";
import { useState, useEffect } from "react";

const initialFormValues = {fullName:"", phoneNumber:""}
const Form = ({ addContact, contacts }) => {
//   console.log(addContact);

  
  const [form, setForm] = useState(initialFormValues);
  
  const onChangeInput = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    useEffect(() => {
        setForm(initialFormValues)
    },[contacts])
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }
    addContact([...contacts, form]);
    
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeInput}
        ></input>
      </div >
      <div className="btn"> 
      <button >Add</button>

      </div>
    </form>
  );
};

export default Form;
