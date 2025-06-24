import {Routes, Route, BrowserRouter, useLocation} from "react-router-dom"
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { MyOrders } from "./pages/MyOrders";

function App() {
  const {isSeller} = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller")
  return (
      <div>
        {isSellerPath ? null : <Navbar/>}
        <div>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/products/:id" element={<ProductDetails/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/my-orders" element={<MyOrders/>}/>
            </Routes>
        </div>
      </div>
  );
}

export default App;
