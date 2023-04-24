import React, { useState } from 'react'
import './Navbar.css'
// import { Link } from 'react-router-dom'

function Navbar() {
const [click ,setClick]=useState(false)

const handleClick=()=>{
    setClick(!click)
 }

  return (
    <nav>
    <h1>ShopZ</h1>
    <div>
      <ul className={click ?"navbar active":"navbar"}>
        <li>
          <a className="active" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/Categories/">Electronics</a>
        </li>
        <li>
          <a href="/Books">Books</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
        <li>
          <a href="#">Sports</a>
        </li>
      </ul>
    </div>
    <div className="mobile" onClick={handleClick}>
       <i id="bar"
       className={click ? "fas fa-times" : "fas fa-bars"}></i>
    </div>
  </nav>
  )
}

export default Navbar