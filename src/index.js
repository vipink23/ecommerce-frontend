import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './App/Store';
import { Provider } from 'react-redux';
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router-dom';
import Index from "./Pages/Index";
import ProductDetails, { loader } from "./Pages/ProductDetails";
import Categories , {loader as catloader} from "./Pages/Categories";
import Cartlist from "./Pages/Cartlist";


// const router = createBrowserRouter([
//   { path: "/", element: <Index />},

//   { path: "/Categories/:id", element:<Categories/>,
//   loader:catloader },

//   { path: "/productDetails/:id",
//     element: <ProductDetails />,
//     loader: loader,
//   },
//   {
//     path:"/Cartlist",
//     element:<Cartlist />,
//   }

// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
  
    <Provider store={Store}>
    <App />
    
    </Provider > 
    
  </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

