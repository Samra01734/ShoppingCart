import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <h5 className="text-center text-muted">Cart is Empty</h5>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-3 border p-3 rounded">
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
              />
              <div className="ms-3 flex-grow-1">
                <h6>{item.title}</h6>
                <p className="mb-0">${item.price}</p>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary btn-sm mx-1"
                  onClick={() => dispatch({ type: "Decrease", id: item.id })}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  className="btn btn-outline-secondary btn-sm mx-1"
                  onClick={() => dispatch({ type: "Increase", id: item.id })}
                >
                  +
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => dispatch({ type: "Remove", id: item.id })}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h4 className="text-end mt-4">Total: ${total.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;
