import React, { useContext } from "react";
import { MovieContext } from "../context-and-reducer/MovieContext";

const FavoriteMovie = ({ item }) => {
  const { removeFromFavorite } = useContext(MovieContext);
  const handleRemove = () => {
    removeFromFavorite(item);
  };
  return (
    <div className="mx-auto px-7 border border-pink-100 hover:border-yellow-300 rounded-lg mt-2 mb-2 ml-2 mr-2">
      <img
        src={item.Poster}
        alt={item.Title}
        className="w-100 h-150 mt-5 mb-5"
      />
      <div className="movieDetail">
        <div className="mt-2 mb-2">
          <p className="text-xl font-semibold">{item.Title}</p>
          <p className="text-base font-medium round-full">{item.Year}</p>
          <p className="text-base font-bold">{item.Rated}</p>
          {/* <p className="text-sm">Director: {item.Director}</p> */}
          {/* <p className="text-sm">Actors: {item.Actors}</p> */}
          {/* <p className="text-sm">{item.Plot}</p> */}
        </div>
      </div>
      <button
        className="bg-pink-700 text-white text-lg font-medium rounded-md p-1 hover:bg-yellow-500 mt-2 mb-5"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};
export default FavoriteMovie;
