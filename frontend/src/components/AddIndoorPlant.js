import React, { useState } from "react";

const AddIndoorPlant = () => {
  // JSON object to add the plant to the database:
  //   {
  //     "sku": "INDOOR-PLANT-2000",
  //     "name": "TEST",
  //     "description": "Test",
  //     "unitPrice": "19.99",
  //     "imageUrl": "assets/images/products/placeholder.png",
  //     "active": "true",
  //     "unitsInStock": 100,
  //     "dateCreated": "2022-04-09T18:01:48.000+00:00",
  //     "lastUpdated": "2022-04-09T18:10:48.000+00:00"
  //     "category" : "/api/product-category/1",
  // }

  const [indoorPlant, setIndoorPlant] = useState({
    sku: "",
    name: "",
    description: "",
    unitPrice: "",
    imageUrl: "",
    active: true,
    unitsInStock: "",
    dateCreated: "",
    lastUpdated: "",
    category: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setIndoorPlant((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleCheckbox = (e) => {
    const { name } = e.target;
    setIndoorPlant((prevState) => ({
      ...prevState,
      [name]: !prevState.active,
    }));
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add Indoor Plant</h1>
        </div>
        {/* sku */}
        <div className="items-center justify-center w-full">
          <label className="block text-gray-600 text-sm font-normal">SKU</label>
          <input
            name="sku"
            value={indoorPlant.sku}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 p-2 rounded-lg"
            type="text"
            placeholder="SKU Eg: INDOOR-PLANT-1006"
          ></input>
        </div>

        {/* product name */}
        <div className="items-center justify-center w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Name
          </label>
          <input
            name="name"
            value={indoorPlant.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 p-2 rounded-lg"
            type="text"
            placeholder="Plant Name Here"
          ></input>
        </div>

        {/* description */}
        <div className="items-center justify-center w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Description
          </label>
          <textarea
            name="description"
            value={indoorPlant.description}
            onChange={(e) => handleChange(e)}
            className="w-96 border mt-2 p-2 rounded-lg"
            rows={5}
            cols={5}
            placeholder="Plant Description Here"
          ></textarea>
        </div>

        {/* unitPrice */}
        <div className="items-center justify-center w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Unit Price
          </label>
          <input
            name="unitPrice"
            value={indoorPlant.unitPrice}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 p-2 rounded-lg"
            type={"number"}
            placeholder="Price Here"
          ></input>
        </div>

        {/* imageUrl */}
        <div className="items-center justify-center w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Image Url
          </label>
          <input
            name="imageUrl"
            value={indoorPlant.imageUrl}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 p-2 rounded-lg"
            type="text"
            placeholder="Url Here"
          ></input>
        </div>

        {/* active */}
        <div className="flex items-center my-2 w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Active
          </label>
          <input
            type="checkbox"
            checked={indoorPlant.active}
            name="active"
            onChange={(e) => handleCheckbox(e)}
            className="mx-2"
          />
        </div>

        {/* unitsInStock */}
        <div className="items-center justify-center w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Units In Stock
          </label>
          <input
            name="unitsInStock"
            value={indoorPlant.unitsInStock}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 p-2 rounded-lg"
            type={"number"}
            placeholder="Units Here"
          ></input>
        </div>

        {/* Form buttons */}
        <div className="items-center justify-center w-full space-x-4 py-4">
          <button className="rounded text-white font-semibold bg-green-600 hover:bg-green-800 px-6 py-2">
            Save
          </button>
          <button className="rounded text-white font-semibold bg-red-600 hover:bg-red-800 px-6 py-2">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIndoorPlant;
