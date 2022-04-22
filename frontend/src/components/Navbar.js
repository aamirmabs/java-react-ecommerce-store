import React from "react";

function Navbar() {
  return (
    <div className="bg-gray-800">
      {/* <header className="h-16 px-8 flex items-center">
        <p className="text-white font-bold">Plant-A-Tree Store</p>
      </header> */}
      <div className="h-auto border-b-4">
        <div className="antialiased bg-gray-100">
          <div className="w-full text-gray-700 bg-white        ">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <a
                  href="/"
                  className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg   focus:outline-none focus:shadow-outline"
                >
                  Plant-A-Tree
                </a>
              </div>
              <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/products"
                >
                  All Products
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/indoor-plants"
                >
                  Indoor Plants
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/outdoor-plants"
                >
                  Outdoor Plants
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/tools"
                >
                  Tools
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/accessories"
                >
                  Accessories
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-green-700 rounded-lg md:mt-0 md:ml-4 text-white hover:text-gray-100 focus:text-gray-100 hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:shadow-outline"
                  href="/cart"
                >
                  Cart
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-green-700 rounded-lg md:mt-0 md:ml-4 text-white hover:text-gray-100 focus:text-gray-100 hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:shadow-outline"
                  href="/login"
                >
                  Login
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-red-700 rounded-lg md:mt-0 md:ml-4 text-white hover:text-gray-100 focus:text-gray-100 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:shadow-outline"
                  href="/logout"
                >
                  Log Out
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
