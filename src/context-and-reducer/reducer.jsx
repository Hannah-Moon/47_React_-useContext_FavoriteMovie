export const initialState = {
  total: 0,
  movies: [],
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        movies: action.payload,
      };
    case "remove":
      return {
        ...state,
        movies: action.payload,
      };
    case "update movie":
      return {
        ...state,
        total: action.payload,
      };
    default:
      throw Error("Cannot match case in reducer");
  }
};

export default movieReducer;
