import React, { useContext } from "react";
import { MovieContext } from "../context-and-reducer/MovieContext";

const FavoriteMovie = ({ movie }) => {
  const { removeFromFavorite } = useContext(MovieContext);

  const handleRemove = () => {
    removeFromFavorite(movie);
  };

  return (
    <div className="mx-auto px-7 border border-pink-100 hover:border-yellow-300 rounded-lg mt-2 mb-2 ml-2 mr-2">
      <img src={movie.Poster} alt={movie.Title} className="moviePoster" />
      <div className="movieDetail">
        <div className="mt-2 mb-2">
          <p className="text-xl font-semibold">{movie.Title}</p>
          <p className="text-base font-medium round-full">{movie.Year}</p>
          <p className="text-base font-bold">
            {movie.Rated} ⋅ {movie.Genre}
          </p>
          {/* <p className="text-sm">Director: {movie.Director}</p> */}
          {/* <p className="text-sm">Actors: {movie.Actors}</p> */}
          {/* <p className="text-sm">{movie.Plot}</p> */}
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
