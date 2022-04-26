import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService";
import { useCart } from "./../contexts/CartContext";
import ProductCard from "./ProductCard";
import LoadingScreen from "./LoadingScreen";

// {
//   sku: "",
//   name: "",
//   description: "",
//   unitPrice: "",
//   imageUrl: "",
//   active: true,
//   unitsInStock: "",
//   dateCreated: "",
//   lastUpdated: "",
//   category: "/api/product-category/3",
// }

function ShowProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const { itemsInCart, setItemsInCart, addItemToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

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

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col  items-center justify-center w-full">
        <h1 className="font-medium leading-tight text-5xl m-1 text-green-800">
          All Products
        </h1>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 md:gap-2 p-2">
        {loading ? (
          <LoadingScreen />
        ) : (
          products.map((product) => {
            return <ProductCard product={product} key={product.name} />;
          })
        )}
      </div>
    </div>
  );
}

export default ShowProducts;
