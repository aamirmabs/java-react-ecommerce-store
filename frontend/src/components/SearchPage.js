import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ProductService from "../services/ProductService";
import ProductCard from "./ProductCard";

function SearchPage() {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  const [query, setQuery] = useState("");
  let [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await ProductService.getProducts()
          .then((res) => {
            return res.data;
          })
          .then((data) => {
            setProducts(data._embedded.products);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  products = null;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="font-medium leading-tight text-5xl m-1 text-green-800">
        Search For Products
      </h1>
      {/* search form */}
      <div className="m-3 xl:w-96">
        <div className="input-group relative flex flex-row items-stretch w-full mb-4">
          <input
            type="search"
            className="form-control shadow relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 hover:shadow-lg focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none focus:border-2 focus:shadow-lg"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="btn inline-block mx-2 px-6 py-2.5 bg-green-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
          >
            {searchIcon}
          </button>
        </div>
      </div>
      {/* search result */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-2 p-2">
        {products
          ? products.map((product) => {
              return <ProductCard product={product} key={product.name} />;
            })
          : null}
      </div>
    </div>
  );
}

export default SearchPage;
