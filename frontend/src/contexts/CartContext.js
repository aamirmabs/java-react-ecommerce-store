import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function cartContextFunction() {
  console.log("cartContextFunction() executed");
}

export const initialCartContextValue = {
  "INDOOR-PLANT-1002": {
    name: "Mistletoe Cactus (Rhipsalis Cashero) - 15-25cm Height",
    quantity: 1,
    unitPrice: 24.99,
  },
};

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState(initialCartContextValue);

  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
