import "./App.css";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider,BrowserRouter,Route,Routes,MemoryRouter } from "react-router-dom";
import Index from "./Pages/Index";
import ProductDetails, { loader } from "./Pages/ProductDetails";
import Categories , {loader as catloader} from "./Pages/Categories";
import Cartlist from "./Pages/Cartlist";
import HomePage from "./Pages/HomePage";
import PayPal from "./Pages/PayPal";
import Register from "./Pages/Register";
import Login from "./Pages/Login";


function App() {
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
  return (
    <div>
     {/* <Navbar />
     <RouterProvider router={router} / >  */}

<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/categories/:id" element={<Categories />} loader={catloader} />
        <Route path="/productDetails/:id" element={<ProductDetails />} loader={loader} />
        <Route exact path="/cartlist" element={<Cartlist />} />
        <Route path="cartlist/paypal" element={<PayPal/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
     

      
    </div>
  );
}

export default App;
