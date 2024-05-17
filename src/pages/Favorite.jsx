import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { MovieContext } from "../context-and-reducer/MovieContext";
import FavoriteMovie from "../components/FavoriteMovie";

const Favorite = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div>
      <Navbar />
      <h2 className="font-semibold flex flex-col items-left text-8xl tracking-wide mt-20 pl-10">
        Your favorite movies
      </h2>
      <h3 className="font-light items-left text-2xl tracking-wide mb-5 pl-20">
        Save your favorite movies. Remove them anytime.
      </h3>

      {/* <div className="flex flex-col items-center lg:grid lg:grid-cols-2 px-8 mt-10 mb-10">
        <div class="bg-green-600 h-12"></div>
        <div class="bg-green-300 h-12"></div>
      </div> */}

      <div className="flex flex-row items-center lg:grid lg:grid-cols-3 px-8 mt-10 mb-10">
        {movies.map((movie, i) => (
          <FavoriteMovie key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
