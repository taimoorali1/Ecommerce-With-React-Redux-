import React from "react";
import Header from "./containers/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import "./App.css";
import ProductComponent from "./containers/ProductComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Routes>
        <Route path="/" >
          <ProductListing />
        </Route>
        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
      </Routes> */
}
