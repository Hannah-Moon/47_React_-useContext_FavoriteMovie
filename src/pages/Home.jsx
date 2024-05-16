import React from "react";
import Navbar from "../components/Navbar";
import { movieData } from "../models/data";
import Movie from "../components/Movie";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h2 className="font-semibold flex flex-col items-left text-8xl tracking-wide mt-20 pl-20">
        Unlimited movies
      </h2>
      <h3 className="font-light items-left text-2xl tracking-wide mb-5 pl-20">
        Save your favorite movies. Remove them anytime.
      </h3>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-3 px-8 mt-10 mb-10">
        {movieData.map((item, i) => (
          <Movie key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
