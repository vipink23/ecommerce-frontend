import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../Pages/Cssfiles/Pages.module.css";

export function loader(req) {
  console.log(req.params, "catogoriessss");
  return req.params;
}

function Categories() {
  const [collection, setCollection] = useState([]);
  const { id } = useParams();

  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/products?categories=" + id).then((res) => {
      setCollection(res.data);
      console.log(res.data, "dfjjnsv");
    });
  }, [id]);
  return (
    <div>
      <section>
        {collection?.map((col, index) => {
          console.log(col, "collllll");
          return (
            <div
              key={index}
              onClick={() => {
                navigate("/ProductDetails/" + col._id);
              }}
              className={styles.column + " " + styles.card_style}
            >
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
  );
}

export default Categories;
