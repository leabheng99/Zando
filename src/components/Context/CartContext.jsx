import React, { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  setCart((prev) => [...prev, product]);

  Swal.fire({
    title: "✅ Added!",
    text: `${product.name} has been added to cart.`,
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
    toast: true,
    position: "top-end"
  });
};

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
