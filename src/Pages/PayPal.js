import { useState } from "react";
import "../Pages/Cssfiles/PayPal.css";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPal({ address, total,cartProducts }) {
  const [addressName, setAddressName] = useState(address.name);
  // const adrname=address.name

  console.log(address, "adddddddddrrrr", total,cartProducts);
  console.log(address.name,'adrnamessss');
  return (
    <div className="app">
      <PayPalScriptProvider
        options={{
          "client-id": "test",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              // const name = details.payer.name.given_name;
              
              console.log(addressName,'adrname');
              alert(`Transaction completed by ${addressName}`);
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default PayPal;
