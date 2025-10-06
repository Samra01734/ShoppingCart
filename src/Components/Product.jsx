import React from "react";

const Product = ({ product }) => {
  return (
    <div className="card-body text-center">
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid mb-3"
        style={{ height: "200px", objectFit: "contain" }}
      />
      <h5>{product.title}</h5>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
