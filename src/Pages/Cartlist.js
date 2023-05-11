import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../Features/Cartlist/cartSlice";
import "./Cartlist.css";
import { useSelector } from "react-redux";

function Cartlist() {
  const productCart = useSelector((state) => state.cart.cart);
  // const dispatch=useDispatch()


  
  return (
    <div>



      <div className="small-container cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>subtotal</th>
          </tr>

          {productCart.map((product)=>{
        return(
          <tr>
          <td>
            <div className="cart-info">
              <img
                src={product.image}
              />
              <div>
                <p>{product.name}</p>
                {/* <small>price:$50.00</small> */}
                <br />

                <a href="">remove</a>
              </div>
            </div>
          </td>
          <td>
            <button >+</button>
            <span>0</span>
            <button onClick={() => console.log("incement")}>-</button>
          </td>
          <td>${product.price}</td>
        </tr>
        )
       })}

        
        </table>

        <div className="total-price">
          <table>
            <tr>
              <td>Total</td>
              <td>$300</td>
            </tr>
          </table>
        </div>
      </div>

      {/* {JSON.stringify(productCart)} */}
    </div>
  );
}

export default Cartlist;
