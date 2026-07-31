import React from "react";
import Card from "./Card";
import { products } from "../../data";

const ProductCard = () => {
  return (
    <div >
      <Card product={products} />
    </div>
  );
};

export default ProductCard;
