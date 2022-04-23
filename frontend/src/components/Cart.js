import React, { useContext } from "react";
import { useCart } from "./../contexts/CartContext";

function Cart() {
  const { cartItems, cartContextFunction } = useCart();

  return <div>CartItems: {cartItems}</div>;
}

export default Cart;
