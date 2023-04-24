import React, { useState, useEffect } from "react";
import styles from "./Pages.module.css";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);
const [type,setType]=useState('')
const types=[{name:'Action'},{name:'Horror'},{name:'Love'}]
console.log(type);


  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/?cat=64377bfb3e96d43a9b333440&brand=none&type=${type}`)
      .then((res) => {
        setBooks(res.data);
      });
  }, [type]);

  console.log(books, "books");


  const newtype=(type)=>{
    setType(type)
  }

  return (
    <div>
      <h3>Books</h3>
      {types.map((type)=>{
        return(
          <button onClick={()=>newtype(type.name)}>{type.name}</button>
        )
      })}
      <section>
        {books.map((book) => {

          return(
          <div className={styles.column + " " + styles.card_style}>
            <figure>
              <img src={book.image} />
            </figure>
            <div className={styles.card_text}>
              <h1>{book.name}</h1>
              <p className={styles.ellipsis}>{book.discription}</p>
              <h2>Price:{book.price}</h2>
            </div>
          </div>)
        })}
      </section>
    </div>
  );
}

export default Books;
