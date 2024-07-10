import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ProductPage } from "./pages/Product";
import { CartPage } from "./pages/AllPages/Cart";
import { CheckoutPage } from "./pages/Checkout";
import { CheckoutPaymentPage } from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<ProductPage/>} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<CheckoutPaymentPage />} />
          </Routes>
          </BrowserRouter>
  );
}

export default App;
