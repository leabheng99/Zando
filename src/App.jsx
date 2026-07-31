import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductCard from "./components/Main/Products/ProductCard";
import ProductDetail from "./components/Main/Products/ProductDetail";

// Category pages
import Product_Men from "./components/Main/Category_Product/ProductMens/Product_Men";
import Product_Women from "./components/Main/Category_Product/ProductWomen/Product_Women";
import Product_Boys from "./components/Main/Category_Product/ProductBoys/Product_Boys";
import Product_Girls from "./components/Main/Category_Product/ProductGirls/Product_Girls";

// Category detail pages
import Product_Detail_Women from "./components/Main/Category_Product/ProductWomen/Product_Detail_Women";
import Product_Detail_Men from "./components/Main/Category_Product/ProductMens/Product_Detail_Men";
import Product_Detail_Boys from "./components/Main/Category_Product/ProductBoys/Product_Detail_Boys";
import Product_Detail_Girls from "./components/Main/Category_Product/ProductGirls/Product_Detail_Girls";

// 🛒 Cart
import CartPage from "./components/Cart/CartPage";
import { CartProvider } from "./components/Context/CartContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <CartProvider>
      <Router>
        {/* Pass toggleCart to Navbar */}
        <Navbar toggleCart={toggleCart} />

        {/* Cart sidebar */}
        <CartPage isOpen={cartOpen} closeCart={toggleCart} />

        {/* Main Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                <Home />
                <ProductCard />
                <Product_Women />
                <Product_Men />
                <Product_Boys />
                <Product_Girls />
                <Footer/>
              </div>
            }
          />

          {/* All Products */}
          <Route path="/product" element={<ProductCard />} />

          {/* Product Detail (generic) */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Category Listing */}
          <Route path="/product/men" element={<Product_Men />} />
          <Route path="/product/women" element={<Product_Women />} />
          <Route path="/product/boys" element={<Product_Boys />} />
          <Route path="/product/girls" element={<Product_Girls />} />

          {/* Category Product Detail */}
          <Route path="/product/men/:id" element={<Product_Detail_Men />} />
          <Route path="/product/women/:id" element={<Product_Detail_Women />} />
          <Route path="/product/boys/:id" element={<Product_Detail_Boys />} />
          <Route path="/product/girls/:id" element={<Product_Detail_Girls />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
