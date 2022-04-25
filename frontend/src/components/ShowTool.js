import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";
import ProductCard from "./ProductCard";
import LoadingScreen from "./LoadingScreen";

function ShowTool() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [tools, setTools] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await ProductService.getTools()
          .then((res) => {
            return res.data;
          })
          .then((data) => {
            setTools(data._embedded.products);
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
          Tools
        </h1>
        <button
          className="rounded text-white bg-green-700 hover:bg-green-900 px-4 py-2 m-1 w-96"
          onClick={() => navigate("/indoor-plants/add")}
        >
          Add Tools
        </button>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-2 p-2">
        {loading ? (
          <LoadingScreen />
        ) : (
          tools.map((product) => {
            return <ProductCard product={product} />;
          })
        )}
      </div>
    </div>
  );
}

export default ShowTool;
