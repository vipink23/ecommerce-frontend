import React, { useState } from "react";
import "./checkout.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Address from "./Address";
import PayPal from "./PayPal";

function CheckOut() {
  const [click, setClick] = useState(false);
  const [address, setAddress] = useState({});
  const location = useLocation();
  const total = location.state ? location.state.total : 0;

  const user = useSelector((state) => state.user);
  console.log(user, "from checkout");
  const products=useSelector((state)=>state.cart.cart)
  console.log(products,'cartproductss');

  const submitAddress = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      userId: user.user._id,
      name: formData.get("name"),
      address: formData.get("address"),
      locality: formData.get("locality"),
      mobileNumber: formData.get("mobileNumber"),
      state: formData.get("state"),
      pincode: formData.get("pincode"),
    };

    axios
      .post("http://localhost:3001/address", data)
      .then((res) => {
        setClick(!click);
      })
      .catch((error) => {
        console.log(error, "errrorrrrrrrrr");
      });
  };
  const handleChildValue = (value) => {
    setAddress(value);
  };

  return (
    <div>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form onSubmit={submitAddress}>
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label>
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="name"
                    placeholder="John M. Doe"
                  />
                  <label>
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label>
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="locality"
                    placeholder="New York"
                  />
                  <label>
                    <i className="fa fa-phone"></i>Phone Number
                  </label>
                  <input
                    type="text"
                    id="nuber"
                    name="mobileNumber"
                    placeholder="9676586785"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label>State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label>Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="pincode"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btnnnn">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Address onValueChange={handleChildValue} click={click} />
      <PayPal total={total} address={address} cartProducts={products} />
    </div>
  );
}

export default CheckOut;
