import React from "react";

const Movie = ({ item }) => {
  return (
    <div className="mx-auto px-7 border border-gray-200 rounded-lg">
      <img src={item.Poster} alt="Guardians of the Galaxy Vol.2" />
      <div className="">
        <div>
          <p className="text-xl">{item.Title}</p>
          <p className="text-lg font-medium round-full">{item.Year}</p>
          <p className="text-md">{item.Rated}</p>
          {/* <p className="text-sm">Director: {item.Director}</p> */}
          {/* <p className="text-sm">Actors: {item.Actors}</p> */}
          {/* <p className="text-sm">{item.Plot}</p> */}
        </div>
        <button className="bg-pink-700 text-white text-lg font-medium rounded-md p-1">
          Add to favorite
        </button>
      </div>
    </div>
  );
};

export default Movie;
