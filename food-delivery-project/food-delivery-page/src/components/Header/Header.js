import './Style.css';
import React from 'react'
import Navbar from './Navbar/Navbar';




function Header() {
  return (
    <div className = 'headerContainer'>
        <Navbar />
        {/* <Search /> */}
        
    </div>
  )
}

export default Header;