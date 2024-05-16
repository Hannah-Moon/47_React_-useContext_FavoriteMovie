import { createContext, useReducer } from "react"; // Added useReducer import
import reducer, { initialState } from "./reducer";

export const MovieContext = createContext;

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
  const removefromFavorite = (movie) => {
    const updateFavorite = state.movies.filter(
      (currentMovie) => currentMovie.name !== movie.name
    );

    dispatch({
      type: "remove",
      payload: updateFavorite,
    });
  };

  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};
