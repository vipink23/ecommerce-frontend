import React, { useState, useEffect } from "react";
import styles from "./Pages.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Electronics() {
  const navigate = useNavigate();
  const [Electronics, setElectronics] = useState([]);
  const [brand, setBrand] = useState("All");
  console.log(brand, "brrrannadd");
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/products/?cat=6436472f988f9646c4821dfb&brand=${brand}`
      )
      .then((res) => {
        setElectronics(res.data);
        console.log(res.data);
      });
  }, [brand]);

  // const brandnew = (brand) => {
  //   setBrand(brand);
  // };

  console.log(Electronics, "Electronics");

  return (
    <div>
      <h3>Electronics</h3>
      {/* <button onClick={() => brandnew("Apple")}> Apple</button>
      <button onClick={() => brandnew("Sony")}> Sony</button> */}

      <section>
        {Electronics?.map((elec) => {
          return (
            <div
              className={styles.column + " " + styles.card_style}
              onClick={() => {
                navigate("/ProductDetails/" + elec._id);
              }}
            >
              <figure>
                <img src={elec.image} />
              </figure>
              <div className={styles.card_text}>
                <h1>{elec.name}</h1>
                <p className={styles.ellipsis}>{elec.discription}</p>
                <h2>Price:{elec.price}</h2>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Electronics;
