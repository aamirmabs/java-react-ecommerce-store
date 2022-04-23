import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";

function ShowAccessories() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [Accessories, setAccessories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await ProductService.getAccessories()
          .then((res) => {
            return res.data;
          })
          .then((data) => {
            setAccessories(data._embedded.products);
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
      <div className="flex flex-col  items-center justify-center w-full">
        <h1 className="font-medium leading-tight text-5xl m-1 text-green-800">
          Accessories
        </h1>
        <button
          className="rounded text-white bg-green-700 hover:bg-green-900 px-4 py-2 m-1 w-96"
          onClick={() => navigate("/indoor-plants/add")}
        >
          Add Accessories
        </button>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-2 p-2">
        {loading
          ? "Loading..."
          : Accessories.map((product) => {
              return (
                <div
                  className="w-full max-w-sm mx-auto rounded-md shadow-sm hover:shadow-md overflow-hidden"
                  key={product.name}
                >
                  <div className="flex items-end justify-center w-full">
                    <img
                      className="object-fill"
                      // src={"/images/products/placeholder.png"}
                      src={
                        "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_800,q_auto:good,w_800/v1564154462/products/kentia-palm-1a5d98.jpg"
                      }
                      alt={product.name}
                    ></img>
                  </div>
                  <div className="flex flex-col px-5 py-3">
                    <h3 className="text-gray-700 uppercase">{product.name}</h3>
                    <span className="text-gray-500 mt-2">
                      ${product.unitPrice}
                    </span>

                    <button
                      className="rounded text-white  bg-green-700 hover:bg-green-900 px-4 py-2 m-1 w-full"
                      onClick={() => console.log("Add to cart")}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ShowAccessories;
