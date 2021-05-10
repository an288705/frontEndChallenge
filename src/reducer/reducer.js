export const initialState = {
  movies: [],
  nominations: [],
  value: "",
  query: "",
  isFetchingMovies: false,
  error: { hasError: false, message: "" },
};

export function reducer(state, action) {
  const { type } = action; //set the type of action

  function removeNomination(state, movieObject) {
    const { nominations } = state;
    const nominationsCopy = [...nominations];
    const nominatedMovieIndex = nominationsCopy.findIndex(
      (movieObj) => movieObj.imdbID === movieObject.imdbID
    );
    nominationsCopy.splice(nominatedMovieIndex, 1);
    return nominationsCopy;
  }

  switch (type) {
    case "SET_MOVIES":
      return { ...state, movies: action.movies };
    case "SET_NOMINATED_MOVIES":
      return {
        ...state,
        nominations: [...state.nominations, action.nomination],
      };
    case "REMOVE_NOMINATED_MOVIE":
      return {
        ...state,
        nominations: removeNomination(state, action.movieObject),
      };
    case "SET_VALUE":
      return { ...state, value: action.value };
    case "SET_QUERY":
      return { ...state, query: action.query };
    case "SET_FETCHING_INDICATOR":
      return { ...state, isFetchingMovies: action.isFetchingMovies };
    case "SET_ERROR_INDICATOR":
      return { ...state, error: { ...action.error } };
    default:
      return state;
  }
}
