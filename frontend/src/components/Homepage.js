import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
              <a href="/indoor-plants">
                <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined hover:shadow-sm">
                  <div className="p-4 undefined">
                    <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-green-500">
                      <span className="material-icons text-white text-xl leading-none"></span>
                    </div>

                    <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                      Indoor Plants
                    </h1>
                    <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                      Plants will bring life to any room in your home, but many
                      will be particularly happy in the bathroom. Ferns like
                      Bertie will love soaking up the steam. Find your indoor
                      plant here.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-4 flex justify-center text-center">
              <a href="/outdoor-plants">
                <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined hover:shadow-sm">
                  <div className="p-4 undefined">
                    <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-green-600">
                      <span className="material-icons text-white text-xl leading-none"></span>
                    </div>

                    <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                      Outdoor Plants
                    </h1>
                    <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                      Whether you have a single windowsill or a garden, there's
                      a plant for your outdoor space. Use our outdoor style
                      filter to find your perfect match. Find your outdoor plant
                      here.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-4 flex justify-center text-center">
              <a href="/tools">
                <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined hover:shadow-sm">
                  <div className="p-4 undefined">
                    <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-green-700">
                      <span className="material-icons text-white text-xl leading-none"></span>
                    </div>

                    <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                      Tools
                    </h1>
                    <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus. Find the right tools here.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-4 flex justify-center text-center">
              <a href="/accessories">
                <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined hover:shadow-sm">
                  <div className="p-4 undefined">
                    <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-green-800">
                      <span className="material-icons text-white text-xl leading-none"></span>
                    </div>
                    <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                      Accessories
                    </h1>
                    <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus. Find the perfect accesories here.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
