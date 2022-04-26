import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import { useCart } from "./../contexts/CartContext";
import CartItem from "./CartItem";

const roundDecimalTo2 = (value) => {
  return parseFloat(value).toFixed(2);
};

function Cart() {
  const { itemsInCart, setItemsInCart, processPayment } = useCart();

  const navigate = useNavigate();

  const infoCircleIcon = <FontAwesomeIcon icon={faInfoCircle} />;
  const crossIcon = <FontAwesomeIcon icon={faXmarkCircle} />;

  // calculating total price and discount if applicable
  let totalPrice = 0;
  let discount = 0;

  const keys = Object.keys(itemsInCart);
  keys.forEach((key) => {
    totalPrice += itemsInCart[key].quantity * itemsInCart[key].unitPrice;
  });

  totalPrice = roundDecimalTo2(totalPrice);

  if (totalPrice > 49.99) {
    discount = roundDecimalTo2(totalPrice * 0.2);
  } else {
    discount = 0;
  }

  // checking if cart is empty to display empty cart message
  const isCartEmpty =
    itemsInCart &&
    Object.keys(itemsInCart).length === 0 &&
    Object.getPrototypeOf(itemsInCart) === Object.prototype;

  // saving jsx in constants
  const emptyCartMessageJSX = (
    <div className="text-center px-10">
      <p className="text-green-600 text-2xl font-bold">
        Your cart is empty! Add products to view them in the cart...
      </p>

      <Link to="/products">
        <button className="rounded text-white  bg-green-700 hover:bg-green-900 px-4 py-2 m-4 align-middle">
          View Products Page
        </button>
      </Link>
    </div>
  );

  const cartItemsListJSX = (
    <div>
      <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
        Order Summary
      </h1>
      <ul className="py-2 border-b space-y-1 px-4">
        {Object.keys(itemsInCart).map((key) => (
          <CartItem
            item={itemsInCart[key]}
            sku={key}
            key={itemsInCart[key].name}
          />
        ))}
      </ul>
      <div className="px-8 border-b">
        <div className="flex justify-between py-4 text-gray-600">
          <span>Subtotal</span>
          <span className="font-semibold text-pink-500">£{totalPrice}</span>
        </div>
        {/* {discount ? (
          <div className="flex justify-between py-4 text-gray-600">
            <span>Discount</span>
            <span className="font-semibold text-pink-500">£{discount}</span>
          </div>
        ) : (
          <div className="flex justify-between py-4 text-gray-600">
            <span>Discount</span>
            <span className="font-semibold text-pink-500">N/A</span>
          </div>
        )} */}
        <div className="flex justify-between py-4 text-gray-600">
          <span>Discount</span>
          <span className="font-semibold text-pink-500">
            {discount ? "£" + { discount } : "N/A"}
          </span>
        </div>
      </div>
      <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
        <span>Total</span>
        <span>£{roundDecimalTo2(totalPrice - discount)}</span>
      </div>
    </div>
  );

  return (
    <div>
      <div className="my-5">
        <h1 className="flex items-center justify-center font-bold text-green-600 text-md lg:text-3xl">
          Cart
        </h1>
      </div>

      <div className="h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-green-50 space-y-8 px-12">
          <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
            <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
              <div className="text-yellow-500">{infoCircleIcon}</div>
              <div className="text-sm font-medium ml-3">Checkout</div>
            </div>
            <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
              Complete your shipping and payment details below.
            </div>
            <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
              {crossIcon}
            </div>
          </div>
          <div className="rounded-md">
            <form id="payment-form" method="POST">
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Shipping &amp; Billing Information
                </h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Name</span>
                    <input
                      name="name"
                      className="focus:outline-none px-3"
                      placeholder="Try Odinsson"
                      required
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Email</span>
                    <input
                      name="email"
                      type="email"
                      className="focus:outline-none px-3"
                      placeholder="try@example.com"
                      required
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Address</span>
                    <input
                      name="address"
                      className="focus:outline-none px-3"
                      placeholder="10 Street XYZ 654"
                    />
                  </label>
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">City</span>
                    <input
                      name="city"
                      className="focus:outline-none px-3"
                      placeholder="San Francisco"
                    />
                  </label>
                  <label className="inline-flex w-2/4 border-gray-200 py-3">
                    <span className="text-right px-2">State</span>
                    <input
                      name="state"
                      className="focus:outline-none px-3"
                      placeholder="CA"
                    />
                  </label>
                  <label className="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                    <span className="text-right px-2 xl:px-0 xl:text-none">
                      ZIP
                    </span>
                    <input
                      name="postal_code"
                      className="focus:outline-none px-3"
                      placeholder={98603}
                    />
                  </label>
                  <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                    <span className="text-right px-2">Country</span>
                    <div
                      id="country"
                      className="focus:outline-none px-3 w-full flex items-center"
                    >
                      <select
                        name="country"
                        className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
                      >
                        <option value="AU">Australia</option>
                        <option value="BE">Belgium</option>
                        <option value="BR">Brazil</option>
                        <option value="CA">Canada</option>
                        <option value="CN">China</option>
                        <option value="DK">Denmark</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="HK">Hong Kong</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MX">Mexico</option>
                        <option value="NL">Netherlands</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="SG">Singapore</option>
                        <option value="ES">Spain</option>
                        <option value="TN">Tunisia</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                      </select>
                    </div>
                  </label>
                </fieldset>
              </section>
            </form>
          </div>
          <div className="rounded-md">
            <section>
              <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                Payment Information
              </h2>
              <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                  <span className="text-right px-2">Card</span>
                  <input
                    name="card"
                    className="focus:outline-none px-3 w-full"
                    placeholder="Card number MM/YY CVC"
                    required
                  />
                </label>
              </fieldset>
            </section>
          </div>
          <button
            className="submit-button px-4 py-3 rounded-full bg-green-700 hover:bg-green-900 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
            onClick={() => {
              processPayment();
              navigate("/order-confirmation");
            }}
          >
            Pay £{roundDecimalTo2(totalPrice - discount)}
          </button>
        </div>
        <div className="col-span-1 bg-white lg:block hidden">
          {isCartEmpty ? emptyCartMessageJSX : cartItemsListJSX}
        </div>
      </div>
    </div>
  );
}

export default Cart;
