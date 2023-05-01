import "./App.css";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Pages/Index";
import ProductDetails, { loader } from "./Pages/ProductDetails";
import Categories , {loader as catloader} from "./Pages/Categories";
import Cartlist from "./Pages/Cartlist";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Index /> },

    { path: "/Categories/:id", element:<Categories/>,
    loader:catloader },

    { path: "/productDetails/:id",
      element: <ProductDetails />,
      loader: loader,
    },
    {
      path:"/Cartlist",
      element:<Cartlist/>,
      loader:loader
    }

  ]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
