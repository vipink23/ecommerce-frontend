import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import styles from './Pages.module.css'

export function loader(req){
    console.log(req.params);
    return req.params
}

function Categories() {
    const [collection ,setCollection]=useState([])
    const {id}=useLoaderData()
    const navigate=useNavigate()

    
    useEffect(()=>{
        axios.get("http://localhost:3001/products?categories=" +id).then((res)=>{
            setCollection(res.data)
            console.log(res.data,'dfjjnsv')
        })

    },[])
  return (
    <div>
    <section>
        {collection?.map((col) => {
          return (
            <div onClick={()=>
              {navigate("/ProductDetails/" +col._id)}}
              className={styles.column + " " + styles.card_style} >
              <figure>
                <img src={col.image} />
              </figure>
              <div className={styles.card_text}>
                <h1>{col.name}</h1>
                <p className={styles.ellipsis}>{col.discription}</p>
                <h2>Price:{col.price}</h2>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  )
}

export default Categories