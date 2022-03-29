import React from "react";
import { useState } from "react";

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
      return Object.keys(item).some((key) => {
         return item[key]
          .toString().toLowerCase().includes(filterText.toLocaleLowerCase());
      });

  });
  console.log(filtered)
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>

      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
              <span>{contact.fullName}</span>
              <span>{contact.phoneNumber}</span>
              </li>
        ))}
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  );
};

export default List;
