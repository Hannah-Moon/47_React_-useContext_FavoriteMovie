import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import Form from "../components/Form";

const Home = () => {
  const apiKey = "98e3fb1f";
  const defaultMovies = [
    "Guardians of the Galaxy Vol. 2",
    "Forrest Gump",
    "Top Gun: Maverick",
    "WALL·E",
    "The Dark Knight",
    "The Wolf of Wall Street",
  ];

  const [movies, setMovies] = useState([]);

  const getMovies = async (movieTitles) => {
    const promises = movieTitles.map(async (Title) => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&t=${Title}`
        );
        const data = await response.json();

        return data;
      } catch (error) {
        console.error(`Error fetching data for ${Title}:`, error);
        return null;
      }
    });

    const moviesData = await Promise.all(promises);
    setMovies(moviesData.filter((movie) => movie !== null));
  };

  useEffect(() => {
    getMovies(defaultMovies);
  }, []);

  return (
    <div>
      <Navbar />
      <h2 className="font-semibold flex flex-col items-left text-8xl tracking-wide mt-20 pl-10">
        Unlimited movies
      </h2>
      <h3 className="font-light items-left text-2xl tracking-wide mb-0 pl-10">
        Save your as many as your favorite movies.
      </h3>
      <div className="flex justify-end px-8 mt-0 mb-5">
        <Form moviesearch={getMovies} />
      </div>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-3 px-8 mt-0 mb-10">
        {movies.map((movie, i) => (
          <Movie key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
