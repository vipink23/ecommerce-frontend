import React, { useState } from 'react'
import './Navbar.css'
// import { Link } from 'react-router-dom'
import {BsCart3} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Cartlist from '../Pages/Cartlist'



// export function loader(req) {
//   console.log(req.params);
//   return req.params;
// }


function Navbar() {
const [click ,setClick]=useState(false)
const cart =useSelector((state)=> state.cart.cart)
const navigate=useNavigate();



const handleClick=()=>{
    setClick(!click)
 }


 let icnoStyle={ color: "white", fontSize: "1.8em" };

  return (
    <nav>
    <h1>ShopZ</h1>
    <div>
      <ul className={click ?"navbar active":"navbar"}>
        
        <li>
          <a className="active" href="/">Home </a>
          </li>
        
        <li>
          <button className='btn' type="button">Categories</button>
          <ul className='dropdown'>
        <li><a href="/Categories/">Books</a> </li>
        <li><a href="#">Sports</a></li>
        </ul>
        </li>
        <li className='ab'><a>About</a></li>
       <BsCart3 style={icnoStyle} onClick={()=>navigate('/Cartlist')} />
        <div  style={{color:'white', fontSize:'12px',paddingBottom:'18px',}}>{cart.length}</div>
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