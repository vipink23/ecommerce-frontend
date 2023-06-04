import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from 'react-router-dom'
import { BsCart3, BsFillPersonFill } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";

import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cartlist from "../Pages/Cartlist";
import { logout } from "../Features/userSlice/user";


// export function loader(req) {
//   console.log(req.params);
//   return req.params;
// }

function Navbar() {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const dispatch=useDispatch()
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const {user}=useSelector((state)=>state.user)
  console.log(user,'user');

  useEffect(() => {
    axios.get("http://localhost:3001/category").then((res) => {
      console.log(res.data, "dataaaaa");
      setCategory(res.data);
    });
  }, []);

  const handleClick = () => {
    setClick(!click);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  const logoutuser=()=>{
    dispatch(logout())
    setOpen(false)
  }

  let icnoStyle = { color: "white", fontSize: "1.8em" };

  return (
    <nav>
      <h1>ShopZ</h1>
      <div className="avtar" onClick={handleOpen}>
        <BsFillPersonFill />
        {open ? (
          <div>
            <ul className="menu">
              <p className="item">{user?.username}</p>
              <li className="menu-item">
                {user?  <button onClick={()=>logoutuser()}>Logout</button>:  <button onClick={()=>navigate('/login')}>Login</button>}
              
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      <div>
        <ul className={click ? "navbar active" : "navbar"}>
          <li>
            <button className="active" onClick={() => navigate("/")}>
              Home{" "}
            </button>
          </li>

          <li>
            <button className="btn" type="button">
              Categories
            </button>
            <ul className="dropdown">
              {category.map((cat,index) => (
                <li key={index}>
                  <button onClick={()=>navigate('/Categories/'+cat._id)}>{cat.name}</button>
                </li>
              ))}
            </ul>
          </li>
          <li className="ab">
            <a>About</a>
          </li>
          <BsCart3 style={icnoStyle} onClick={() => navigate("/Cartlist")} />
          <div
            style={{ color: "white", fontSize: "12px", paddingBottom: "18px" }}
          >
            {cart.length}
          </div>
        </ul>
      </div>
      <div className="mobile" onClick={handleClick}>
        <i id="bar" className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

export default Navbar;
