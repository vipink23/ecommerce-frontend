import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "../Features/Cartlist/cartSlice";
import "./Cartlist.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cartlist() {
  // const [checkout, setChecout] = useState(false);
  const productCart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user);
  console.log(user, "useeeeeeeee");
  console.log(productCart, "redux product");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = productCart.reduce((acc, current) => {
    return acc + current.total;
  }, 0);

  const handleCheckout = () => {
    if (!user.user) {
      // User is not logged in, redirect to login page
      navigate("/login");
      return;
    }
    const data = {
      user: user.user._id, // Replace with the actual user ID
      cartItem: productCart.map((product) => ({
        product: product._id,
        quantity: product.count,
        total: product.total,
      })),
      subtotal: total,
    };

    axios
      .post("http://localhost:3001/cart", data)
      .then((res) => {
        console.log(res, "ressssssss");
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/checkout", {
      state: {
        total: total,
      },
    });
  };

  console.log(total, "total");
  if (productCart.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          color: "red",
          fontSize: "16px",
        }}
      >
        No products in your cart
      </div>
    );
  }

  return (
    <div>
      <div className="small-container cart-page">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>subtotal</th>
            </tr>

            {productCart.map((product, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="cart-info">
                      <img src={product.image} />
                      <div>
                        <p>{product.name}</p>
                        <br />
                        <br />
                        <a
                          className="btnn"
                          onClick={() => dispatch(remove(product._id))}
                        >
                          remove
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    {product.count > 1 && (
                      <button onClick={() => dispatch(decrement(product))}>
                        -
                      </button>
                    )}
                    <span className="count">{product.count}</span>
                    <button onClick={() => dispatch(increment(product))}>
                      +
                    </button>
                  </td>
                  <td className="price"> ${product.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Total</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button className="bton" onClick={handleCheckout}>
            {" "}
            checkout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartlist;
