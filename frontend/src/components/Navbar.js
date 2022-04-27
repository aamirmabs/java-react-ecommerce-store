import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // abstracting the css classes
  const navbarItemCSS =
    "px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline";

  const navbarGreenBtn =
    "px-4 py-2 mt-2 text-sm font-semibold bg-green-700 rounded-lg md:mt-0 md:ml-4 text-white hover:text-gray-100 focus:text-gray-100 hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:shadow-outline";

  const navbarRedBtn =
    "px-4 py-2 mt-2 text-sm font-semibold bg-red-700 rounded-lg md:mt-0 md:ml-4 text-white hover:text-gray-100 focus:text-gray-100 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:shadow-outline";

  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

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
                <Link
                  to="/"
                  className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg   focus:outline-none focus:shadow-outline"
                >
                  Plant-A-Tree
                </Link>
              </div>
              <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <Link className={navbarItemCSS} to="/products">
                  All Products
                </Link>
                <Link className={navbarItemCSS} to="/indoor-plants">
                  Indoor Plants
                </Link>
                <Link className={navbarItemCSS} to="/outdoor-plants">
                  Outdoor Plants
                </Link>
                <Link className={navbarItemCSS} to="/tools">
                  Tools
                </Link>
                <Link className={navbarItemCSS} to="/accessories">
                  Accessories
                </Link>
                <Link className={navbarItemCSS} to="/search">
                  {searchIcon}
                </Link>
                <Link className={navbarGreenBtn} to="/cart">
                  Cart
                </Link>
                <Link className={navbarGreenBtn} to="/login">
                  Login
                </Link>
                <Link className={navbarRedBtn} to="/logout">
                  Log Out
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
