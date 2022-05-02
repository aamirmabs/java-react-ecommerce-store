import React from "react";

function OrderItem(props) {
  const { orderNumber, subTotal, discount, total, items } = props;
  return (
    <div className="p-6 mt-2 mb-10 2xl:container 2xl:mx-auto bg-slate-50 border-2 ">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Order #{orderNumber}
        </h1>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-green-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <h2 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
              {/* <h2 className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800"> */}
              Order Items
            </h2>
            {items.map((item) => (
              <div
                key={item.name}
                className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
              >
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                      £{item.unitPrice}
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      {item.quantity}
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      £{item.quantity * item.unitPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-green-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">
                    £{subTotal}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Discount</p>
                  <p className="text-base leading-4 text-gray-600">
                    -£{discount}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  £{total}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-green-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Shipping Address
              </h3>
              <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                  <div className="flex flex-col justify-start items-center">
                    <p className="text-lg leading-6 font-semibold text-gray-800">
                      DPD Delivery
                      <br />
                      <span className="font-normal">
                        180 North King Street, Northhampton MA 1060
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
