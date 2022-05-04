import React from "react";
import { useCart } from "./../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function CartItem(props) {
  const { item, sku } = props;
  const { removeItemFromCart, incrementItemCount, decrementItemCount } =
    useCart();

  const trashCan = <FontAwesomeIcon icon={faTrashCan} />;

  return (
    <li className="grid grid-cols-12 gap-2 border-b-1 hover:bg-green-50 p-4 hover:shadow-md">
      <div className="flex flex-col col-span-8 pt-2">
        <span className="text-gray-600 text-xl font-semi-bold">
          {item.name}
        </span>
        <span>
          <button
            className="hover:bg-green-500 bg-green-700 text-white font-bold w-6 mr-2 rounded"
            onClick={() => incrementItemCount(sku)}
          >
            +
          </button>
          <button
            className="hover:bg-green-500 bg-green-700 text-white font-bold w-6 mr-2 rounded"
            // onClick={() => decrementItemCount(sku)}
            onClick={() => {
              item.quantity > 1
                ? decrementItemCount(sku)
                : removeItemFromCart(sku);
            }}
          >
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
      <div className="col-span-1 pt-3">
        <div className="flex items-center space-x-2 text-sm justify-between">
          <span
            className="text-green-700 hover:text-green-900"
            onClick={() => removeItemFromCart(sku)}
          >
            {trashCan}
          </span>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
