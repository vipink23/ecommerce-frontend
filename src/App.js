import "./App.css";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Index from "./Pages/Index";
import ProductDetails, { loader } from "./Pages/ProductDetails";
import Categories, { loader as catloader } from "./Pages/Categories";
import Cartlist from "./Pages/Cartlist";
import PayPal from "./Pages/PayPal";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import CheckOut from "./Pages/CheckOut";
import PrivateRoutes from "./Utils/PrivateRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/categories/:id"
            element={<Categories />}
            loader={catloader}
          />
          <Route
            path="/productDetails/:id"
            element={<ProductDetails />}
            loader={loader}
          />
          <Route exact path="/cartlist" element={<Cartlist />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element ={<PrivateRoutes/>}>
          <Route path="/paypal" element={<PayPal />} />
          <Route path="/checkout" element={<CheckOut />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
