import React, { useState, useEffect, useContext } from "react";
import Data from "../Components/Data.json";
import Product from "../Components/Product";
import { CartContext } from "../Features/ContextProvider";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    setProducts(Data.products);
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <Product product={p} />
              <div className="card-footer bg-transparent border-0 text-center pb-3">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => dispatch({ type: "Add", product: p })}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
