import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incrementQuantity,decrementQuantity } from '../Features/Cartlist/cartSlice'
import './Cartlist.css'


function Cartlist() {
    const cart =useSelector((state)=> state.cart.cart)
    const dispatch=useDispatch()
  return (
    <div>
         <div className="small-container cart-page">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>subtotal</th>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img
                src="https://media.istockphoto.com/id/1180244659/photo/luxury-watch-isolated-on-white-background-with-clipping-path-for-artwork-or-design-black.jpg?s=1024x1024&w=is&k=20&c=qc5_PNwXs7G6wCTV1Oc32FQkJhvZAY3d9Pf3XdpSSM0="
                alt=""
              />
              <div>
                <p>watches</p>
                <small>price:$50.00</small>
                <br/>
                <a href="">remove</a>
              </div>
            </div>
          </td>
          <td>
          <button onClick={()=>dispatch(incrementQuantity()) }>+</button>
            <span>0</span>
            <button onClick={()=>console.log('incement')}>-</button>
          </td>
          <td>$50</td>
        </tr>

      
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
    </div>
  )
}

export default Cartlist