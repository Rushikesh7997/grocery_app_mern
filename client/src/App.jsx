import {Routes, Route, BrowserRouter} from "react-router-dom"
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
      <div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/products/:id" element={<ProductDetails/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
