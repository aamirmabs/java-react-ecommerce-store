import React from "react";

function CartItem(props) {
  const { item } = props;
  return (
    <li className="grid grid-cols-6 gap-2 border-b-1">
      <div className="flex flex-col col-span-3 pt-2">
        <span className="text-gray-600 text-md font-semi-bold">
          {item.name}
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
