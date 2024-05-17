import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToFavorite = (movie) => {
    const updateFavorite = state.movies;
    updateFavorite.push(movie);
    dispatch({
      type: "add",
      payload: updateFavorite,
    });
  };
  const removeFromFavorite = (movie) => {
    const updateFavorite = state.movies.filter(
      (currentMovie) => currentMovie.Title !== movie.Title
    );

    dispatch({
      type: "remove",
      payload: updateFavorite,
    });
  };

  const value = {
    movies: state.movies,
    addToFavorite,
    removeFromFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
