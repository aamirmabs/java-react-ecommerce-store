import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function cartContextFunction() {
  console.log("cartContextFunction() executed");
}

export const initialCartContextValue = {
  "INDOOR-PLANT-1002": {
    name: "Mistletoe Cactus (Rhipsalis Cashero)",
    quantity: 1,
    unitPrice: 24.99,
  },
  "OUTDOOR-PLANT-1002": {
    name: "KING SIZE MONSTERA DELICIOSA",
    quantity: 2,
    unitPrice: 13.99,
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
