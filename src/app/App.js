import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AllPages from './pages/AllPages';
import { HomePage } from "./pages/Landing";
import { ProductPage } from "./pages/Product";
import { ProductDetail } from "./pages/ProductDetail";
import { CartPage } from "./pages/AllPages/Cart";
import { CheckoutPage } from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          </BrowserRouter>
  );
}

export default App;
