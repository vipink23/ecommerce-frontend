import './PayPal.css'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation } from 'react-router-dom';

function PayPal() {
  const location=useLocation()
  const total=location.state.total
  console.log(total,'totalll');
  return (
    <div className='app'>
         <PayPalScriptProvider
      options={{
        "client-id":
          "test",
      }}
    >
     <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
          });
        }}
      />
    </PayPalScriptProvider>
    </div>
  )
}

export default PayPal