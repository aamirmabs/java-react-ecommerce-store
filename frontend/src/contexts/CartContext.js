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

  function addItemToCart(product) {
    setItemsInCart((prevItemsInCart) => {
      // checking if the item is already in the cart and has quantity
      let newQuantity = 0;
      if (prevItemsInCart[product.sku]) {
        newQuantity = prevItemsInCart[product.sku].quantity + 1;
        return {
          ...prevItemsInCart,
          [product.sku]: {
            ...prevItemsInCart[product.sku],
            quantity: newQuantity,
          },
        };
      } else {
        return {
          ...prevItemsInCart,
          [product.sku]: {
            name: product.name,
            unitPrice: product.unitPrice,
            quantity: 1,
          },
        };
      }
    });
  }

  function incrementItemCount(productSKU) {
    setItemsInCart((prevItemsInCart) => {
      console.log("SKU: ", productSKU);

      // increment quantity of the item, if 0 then delete it from the cart
      const product = prevItemsInCart[productSKU];
      console.log("product: ");
      console.log(product);

      let newQuantity = product.quantity + 1;

      return {
        ...prevItemsInCart,
        [productSKU]: {
          ...prevItemsInCart[productSKU],
          quantity: newQuantity,
        },
      };
    });
  }

  function decrementItemCount(productSKU) {
    setItemsInCart((prevItemsInCart) => {
      // decrement quantity of the item, if 0 then delete it from the cart
      const product = prevItemsInCart[productSKU];

      let newQuantity = product.quantity - 1;
      return {
        ...prevItemsInCart,
        [productSKU]: {
          ...prevItemsInCart[productSKU],
          quantity: newQuantity,
        },
      };
    });
  }

  function removeItemFromCart(productSKU) {
    setItemsInCart((prevItemsInCart) => {
      delete prevItemsInCart[productSKU];
      return { ...prevItemsInCart };
    });
  }

  function processPayment() {
    // TODO: logic to add the cart items to the order table

    // clearing the cart object
    setItemsInCart({});

    // redirect to the order confirmation page
    // performed on the cart component page
  }

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addItemToCart,
        processPayment,
        setItemsInCart,
        removeItemFromCart,
        incrementItemCount,
        decrementItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
