import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar navbar-dark bg-secondary px-3">
      <Link to="/" className="navbar-brand fs-3 fw-bold">
        Shop
      </Link>
      <div>
        <Link to="/cart" className="text-white fs-4 text-decoration-none">
          <FaShoppingCart /> {cartCount > 0 && <span>{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
