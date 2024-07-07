import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AllPages from './pages/AllPages';
import { HomePage } from "./pages/Landing";
import { ProductPage } from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          </Routes>
          </BrowserRouter>
  );
}

export default App;
