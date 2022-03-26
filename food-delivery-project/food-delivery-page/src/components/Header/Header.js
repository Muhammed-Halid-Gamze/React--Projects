import "./Style.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";

function Header() {
  return (
    <div className="headerContainer">
      <Navbar />
      <Main />
    </div>
  );
}

export default Header;
