import React, { useState } from 'react'
import './checkout.css'
import { useNavigate } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from 'react-router-dom';
function CheckOut() {
   const [click,setClick]=useState(false)

    const navigate=useNavigate()
    const location=useLocation()
    const total=location.state.total
  return (
    <div>
<div className="row">
  <div className="col-75">
    <div className="container">
      <form action="/action_page.php">

        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label ><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label ><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label ><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>
            <label ><i className="fa fa-phone"></i>Phone Number</label>
            <input type="text" id="nuber" name="number" placeholder="9676586785"/>

            <div className="row">
              <div className="col-50">
                <label >State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
                <label>Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>
        </div>
        <label>
          <input onChange={()=>setClick(!click)} type="checkbox" checked={click} name="sameadr"/> Shipping address same as billing
        </label>
        <button type="submit"  className="btnnnn">submit</button>
      </form>
    </div>
  </div>
</div>



<div className='app'>
         <PayPalScriptProvider
      options={{
        "client-id":
          "test",
      }}
    >
     <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
    </div>
    </div>
  )
}

export default CheckOut