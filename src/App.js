import "./App.css";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Pages/Index";
import ProductDetails, { loader } from "./Pages/ProductDetails";
import Categories , {loader as catloader} from "./Pages/Categories";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Index /> },

    { path: "/Categories/:id", element:<Categories/>,
    loader:catloader },

    { path: "/productDetails/:id",
      element: <ProductDetails />,
      loader: loader,
    },

  ]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
