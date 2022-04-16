import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";

function ShowIndoorPlant() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await ProductService.getIndoorPlants()
          .then((res) => {
            // console.log(res);
            return res.data;
          })
          .then((data) => {
            // console.log("data");
            // console.log(data);
            // console.log("data._embedded");
            // console.log(data._embedded);
            // console.log("data._embedded.products");
            // console.log(data._embedded.products);

            setProducts(data._embedded.products);
            console.log(products);
          });
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <button
        className="rounded text-white bg-green-500 hover:bg-green-700 px-4 py-2 mx-2 my-4"
        onClick={() => navigate("/indoor-plants/add")}
      >
        Add Indoor Plant
      </button>
      <div className="grid grid-cols-4 gap-4 p-4">
        {loading
          ? "Loading..."
          : products.map((product) => {
              return (
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="flex items-end justify-end h-56 w-full">
                    <img
                      className="object-fill"
                      src={"/images/products/placeholder.png"}
                      alt={product.name}
                    ></img>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">{product.name}</h3>
                    <span class="text-gray-500 mt-2">${product.unitPrice}</span>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ShowIndoorPlant;
