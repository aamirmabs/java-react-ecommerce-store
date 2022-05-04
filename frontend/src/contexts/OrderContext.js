import { createContext, useContext, useState } from "react";

export const orderContext = createContext();

export const initialOrderContextValue = {
  "c492672b-90a4-4b4d-b254-3b8e6e0da8b7": {
    subTotal: 52.97,
    discount: 10.59,
    total: 42.38,
    items: [
      {
        name: "Mistletoe Cactus (Rhipsalis Cashero)",
        quantity: 1,
        unitPrice: 24.99,
      },
      {
        name: "KING SIZE MONSTERA DELICIOSA",
        quantity: 3,
        unitPrice: 13.99,
      },
    ],
  },
  "2832b2ad-95ff-4574-b89c-dccb9cfe034b": {
    subTotal: 52.97,
    discount: 10.59,
    total: 42.38,
    items: [
      {
        name: "Garland Garden Pegs - 10 Pack",
        quantity: 1,
        unitPrice: 24.99,
      },
    ],
  },
};

export function OrderProvider({ children }) {
  const [orderState, setOrderState] = useState(initialOrderContextValue);

  function addOrderToOrderState(
    orderNo,
    subTotal,
    discount,
    total,
    itemsArray
  ) {
    console.log("addOrderToOrderState() executed");

    // create new order
    setOrderState((prevOrderState) => {
      return {
        ...prevOrderState,
        [orderNo]: {
          subTotal,
          discount,
          total,
          items: [...itemsArray],
        },
      };
    });
  }

  return (
    <orderContext.Provider
      value={{
        orderState,
        setOrderState,
        addOrderToOrderState,
        initialOrderContextValue,
      }}
    >
      {children}
    </orderContext.Provider>
  );
}

export function useOrder() {
  return useContext(orderContext);
}
