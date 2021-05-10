import React, { useEffect, useReducer } from "react";
import NominationsScreen from "./nominations/NominationsScreen";
import SearchScreen from "./search/SearchScreen";
import { Route, Switch } from "react-router";
import { initialState, reducer } from "../../reducer/reducer";
import apikey from "../../apikey"

export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function submit(event) {
    event.preventDefault();
    if (!state.value) {
      alert("Error: not a valid movie");
      return;
    }
    dispatch({ type: "SET_QUERY", query: state.value });
  }

  function changeHandle(event) {
    dispatch({ type: "SET_VALUE", value: event.target.value });
    if (state.error.hasError) {
      dispatch({
        type: "SET_ERROR_INDICATOR",
        error: { hasError: false, message: "" },
      });
    }
  }

  function nominate(movieObject) {
    if (state.nominations.length === 5) {
      alert("Error: cannot add more than 5 nominations");
      return;
    }
    const nominatedMovieIndex = state.nominations.findIndex(
      (movieObj) => movieObj.imdbID === movieObject.imdbID
    );
    if (nominatedMovieIndex > -1) {
      alert("Error: already nominated");
      return;
    }
    dispatch({ type: "SET_NOMINATED_MOVIES", nomination: movieObject });
  }
  function removeNomination(movieObject) {
    dispatch({ type: "REMOVE_NOMINATED_MOVIE", movieObject });
  }
  useEffect(() => {
    if (!state.query) {
      return;
    }
    const curl = `https://www.omdbapi.com/?apikey=${apikey}&type=movie&s=${state.query}&page=1`;
    async function fetchMovies() {
      try {
        dispatch({ type: "SET_FETCHING_INDICATOR", isFetchingMovies: true });
        const searchedMovie = await fetch(curl).then((response) =>
          response.json()
        );

        if (searchedMovie.Error) {
          dispatch({
            type: "SET_ERROR_INDICATOR",
            error: { hasError: true, message: searchedMovie.Error },
          });
          return;
        }
        dispatch({ type: "SET_MOVIES", movies: searchedMovie.Search });
      } catch (error) {
        dispatch({
          type: "SET_ERROR_INDICATOR",
          error: { hasError: true, message: "Unknown error has occurred" },
        });
      } finally {
        dispatch({ type: "SET_FETCHING_INDICATOR", isFetchingMovies: false });
      }
    }
    fetchMovies();
  }, [state.query]);

  return (
    <main className="main">
      <Switch>
        <Route exact path="/nominations">
          <NominationsScreen
            nominations={state.nominations}
            removeNomination={removeNomination}
          />
        </Route>
        <Route exact path="/">
          <SearchScreen
            movies={state.movies}
            submitHandle={submit}
            changeHandle={changeHandle}
            nominateMovie={nominate}
            nominations={state.nominations}
            value={state.value}
            isFetchingMovies={state.isFetchingMovies}
            error={state.error}
          />
        </Route>
      </Switch>
    </main>
  );
}
