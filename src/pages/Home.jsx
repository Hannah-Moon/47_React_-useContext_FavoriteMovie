import React from "react";
import Navbar from "../components/Navbar";
import { movieData } from "../models/data";
import Movie from "../components/Movie";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center front-semibold mt-2 ply-2">
        useContext + useReducer
      </h1>
      <h2 className="text-4xl tracking-wide py-4 pl-8">Movie</h2>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-3 px-8">
        {movieData.map((item, i) => (
          <Movie key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
