import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CategoriesCard from "./CategoriesCard";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="homepage-bg bg-slate-900 bg-cover bg-center absolute top-0 w-full h-full"></div>
        <div className="container max-w-8xl relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white text-5xl font-serif font-bold leading-normal mt-0 mb-2">
                Plants made easy!
              </h1>
              <div className="text-gray-200">
                <p className="undefined text-lg font-light leading-relaxed mt-6 mb-4">
                  Plant-A-Tree helps you discover the best plants for your
                  space, delivers them to your door and helps you look after
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-20 bg-gray-100 -mt-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap relative z-50">
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-4 flex justify-center text-center">
              <CategoriesCard
                title="Indoor Plants"
                linkTo="/indoor-plants"
                src="/images/card-indoor-plant.jpg"
              />
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-4 flex justify-center text-center">
              <CategoriesCard
                title="Outdoor Plants"
                linkTo="/outdoor-plants"
                src="/images/card-outdoor-plant.jpg"
              />
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-4 flex justify-center text-center">
              <CategoriesCard
                title="Tools"
                linkTo="/tools"
                src="/images/card-tools.jpg"
              />
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-4 flex justify-center text-center">
              <CategoriesCard
                title="Accessories"
                linkTo="/accessories"
                src="/images/card-accessories.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
