import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context-and-reducer/MovieContext";

const Navbar = () => {
  const { movies } = useContext(MovieContext);

  return (
    <>
      <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium">
        <Link to="/">Home</Link>
        <Link to="/favorite">
          Favorite
          <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
            {movies.length}
          </span>
        </Link>
      </div>
      {/* <h1 className="text-3xl text-center front-semibold mt-2 ply-2">
        useContext + useReducer
      </h1> */}
    </>
  );
};

export default Navbar;
