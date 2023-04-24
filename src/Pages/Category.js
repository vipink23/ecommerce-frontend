import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Pages.module.css'
import { useNavigate } from 'react-router-dom'

function Category(props) {
    const [products,setProducts]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        console.log(props.category._id)
        axios.get("http://localhost:3001/products?categories="+ props.category._id, {
         
        }).then((res)=>{
            console.log(res.data,'proooooo')
            setProducts(res.data) 
        })
    }, [])
    
   

  return (
    <div>
      <section>
        <h2 onClick={()=>{navigate('/Categories/'+props.category._id)}}>{props.category.name}</h2>
        {products?.map((prod) => {
          return (
            <div
              className={styles.column + " " + styles.card_style} 
              onClick={() => {
                navigate("/ProductDetails/" + prod._id);
              }} >
              <figure>
                <img src={prod.image} />
              </figure>
              <div className={styles.card_text}>
                <h1>{prod.name}</h1>
                <p className={styles.ellipsis}>{prod.discription}</p>
                <h2>Price:{prod.price}</h2>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  )
}

export default Category