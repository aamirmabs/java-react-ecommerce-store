import React from "react";
import { useCart } from "./../contexts/CartContext";

function CartItem(props) {
  const { item } = props;
  const { itemsInCart, setItemsInCart } = useCart();

  return (
    <li className="grid grid-cols-6 gap-2 border-b-1 hover:bg-green-50 p-4 hover:shadow-md">
      <div className="flex flex-col col-span-3 pt-2">
        <span className="text-gray-600 text-xl font-semi-bold">
          {item.name}
        </span>
        <span>
          <button class="hover:bg-green-500 bg-green-700 text-white font-bold w-6 mr-2 rounded">
            +
          </button>
          <button class="hover:bg-green-500 bg-green-700 text-white font-bold w-6 mr-2 rounded">
            -
          </button>
        </span>
      </div>
      <div className="col-span-3 pt-3">
        <div className="flex items-center space-x-2 text-sm justify-between">
          <span className="text-gray-400">
            {item.quantity} x £{item.unitPrice}
          </span>
          <span className="text-pink-400 font-semibold inline-block">
            £{parseFloat(item.quantity * item.unitPrice).toFixed(2)}
          </span>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
