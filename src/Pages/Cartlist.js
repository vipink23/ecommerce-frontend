import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment,remove } from "../Features/Cartlist/cartSlice";
import "./Cartlist.css";
import { useSelector } from "react-redux";

function Cartlist() {
  const productCart  = useSelector((state) => state.cart.cart);
  console.log(productCart);
  const dispatch = useDispatch();

 
  const total=productCart.reduce((acc,current)=>{
     return acc+current.total
     
  },0)
  console.log(total, 'total');
  
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
                <br />
                <br/>
                <a className="btnn" onClick={()=>dispatch(remove(product._id))}>remove</a>
              </div>
            </div>
          </td>
          <td>
           {product.count >1 && <button onClick={()=>dispatch(decrement(product))} >-</button>} 
            <span className="count">{product.count}</span>
            <button onClick={()=> dispatch(increment(product))}>+</button>
          </td>
          <td className="price"> ${product.total}</td>
        </tr>
        )
       })}

        
        </table>

        <div className="total-price">
          <table>
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
          </table>
        </div>
      </div>

      {/* {JSON.stringify(productCart)} */}
    </div>
  );
}

export default Cartlist;
