import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CategoriesCard(props) {
  const { title, linkTo, src } = props;

  return (
    <div className="max-w-sm  rounded-lg border  shadow-md bg-gray-800 border-gray-700">
      <Link to={linkTo}>
        <img className="rounded-t-lg" src={src} alt="" />
      </Link>
      <div className="p-5 text-center">
        <Link to={linkTo}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">
            {title}
          </h5>
        </Link>
        <Link
          to={linkTo}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          View {title}
        </Link>
      </div>
    </div>
  );
}

export default CategoriesCard;
