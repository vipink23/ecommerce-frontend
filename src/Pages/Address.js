import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../Pages/Cssfiles/Address.css";
import { useLocation, useNavigate } from "react-router-dom";

function Address({ click, onValueChange }) {
  const [address, setAddress] = useState([]);
  const user = useSelector((state) => state.user.user);

  const id = user._id;
  console.log(id);

  useEffect(() => {
    axios
      .get("http://localhost:3001/address/" + id)
      .then((res) => {
        console.log(res.data, "adressss");
        setAddress(res.data.addresses);
      })
      .catch((error) => {
        console.log(error, "errrrrrrrrrrr");
      });
  }, [click]);

  console.log(address, "addressss");

  const handleClick = (adr) => {
    onValueChange(adr);
  };

  const deleteAddress = (addressId) => {
    console.log(addressId, "datsaaaaaaaa");
    axios
      .delete(`http://localhost:3001/address/${addressId}?userId=${id}`)
      .then((res) => {
        console.log(res);
        setAddress((prevAddress) =>
          prevAddress.filter((adr) => adr._id !== addressId)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {address.map((adr) => (
        <div onClick={() => handleClick(adr)} key={adr._id} className="rowss">
          <div className="cardss">
            <h4>{adr.name}</h4>
            <p>{adr.address}</p>
            <p>{adr.locality}</p>
            <p>{adr.state}</p>
            <p>{adr.pincode}</p>
            <p>{adr.mobileNumber}</p>
            </div>
          <button className="buttonn" onClick={() => deleteAddress(adr._id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Address;
