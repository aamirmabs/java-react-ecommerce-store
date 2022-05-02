import React, { useState, useEffect } from "react";

function Homepage() {
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
        {/* Left Side */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* Profile Card */}
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
              <img
                className="h-auto w-full mx-auto"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1000&h=1000&q=80"
                alt=""
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              John Doe
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              Owner at XYZ Company Inc.
            </h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">Nov 07, 2016</span>
              </li>
            </ul>
          </div>
          {/* End of profile card */}
          <div className="my-4"></div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-9/12 mx-2 h-64">
          {/* Profile tab */}
          {/* About Section */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">First Name</div>
                  <div className="px-4 py-2">John</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Last Name</div>
                  <div className="px-4 py-2">Doe</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gender</div>
                  <div className="px-4 py-2">Female</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2">+11 998001001</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Current Address</div>
                  <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">
                    Permanant Address
                  </div>
                  <div className="px-4 py-2">
                    Arlington Heights, IL, Illinois
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email.</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:john@example.com">
                      john@example.com
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Birthday</div>
                  <div className="px-4 py-2">Feb 06, 1998</div>
                </div>
              </div>
            </div>
          </div>
          {/* End of about section */}

          <div className="my-4"></div>

          {/* Order details */}
          <div className="p-6 mt-2 mb-10 2xl:container 2xl:mx-auto bg-slate-50 border-2  ">
            <div className="flex justify-start item-start space-y-2 flex-col ">
              <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
                Order #13432
              </h1>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div className="flex flex-col justify-start items-start bg-green-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                  <h2 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    {/* <h2 className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800"> */}
                    Order Items
                  </h2>
                  <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                      <div className="w-full flex flex-col justify-start items-start space-y-8">
                        <h3 className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                          Premium Quaility Dress
                        </h3>
                      </div>
                      <div className="flex justify-between space-x-8 items-start w-full">
                        <p className="text-base xl:text-lg leading-6">£36.00</p>
                        <p className="text-base xl:text-lg leading-6 text-gray-800">
                          01
                        </p>
                        <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                          £36.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-green-50 space-y-6   ">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">
                      Summary
                    </h3>
                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                      <div className="flex justify-between  w-full">
                        <p className="text-base leading-4 text-gray-800">
                          Subtotal
                        </p>
                        <p className="text-base leading-4 text-gray-600">
                          £56.00
                        </p>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-gray-800">
                          Discount
                        </p>
                        <p className="text-base leading-4 text-gray-600">
                          -£28.00
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base font-semibold leading-4 text-gray-800">
                        Total
                      </p>
                      <p className="text-base font-semibold leading-4 text-gray-600">
                        £36.00
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
          {/* End of profile tab */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
