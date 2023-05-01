import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";

export function loader(req) {
  console.log(req.params);
  return req.params;
}

function ProductDetails() {
  const [products, setProduct] = useState([]);
  
  const { id } = useLoaderData();

  const navigate=useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3001/products/" + id)

      .then((res) => {
        setProduct(res.data);
        //console.log(res.data);
      });
  }, [id]);
  console.log(products, "pro");

  return (
    <div>
      <div className="card-wrapper">
        <div className="card">
          {/* <!-- card left --> */}
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={products.image} alt="jpg" />
              </div>
            </div>
          </div>
          {/* <!-- card right --> */}
          <div className="product-content">
            <h2 className="product-title">{products.name}</h2>

            <div className="product-price">
              <p className="new-price">Price:{products.price}</p>
            </div>

            <div className="product-detail">
              <h2>About this item: </h2>
              <p>{products.discription}</p>
              <ul>
                <li>
                  Color: <span>{products.color}</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>{products?.categories?.name}</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <input type="number" min="0" />
              <button type="button" className="btn" onClick={()=>{navigate('/Cartlist')}}>
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
