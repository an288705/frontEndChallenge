import React from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";

export default function Search(props) {
  return (
    <>
      <SearchBar
        value={props.value}
        submitHandle={props.submitHandle}
        changeHandle={props.changeHandle}
      />
      <SearchResults
        nominateMovie={props.nominateMovie}
        isFetchingMovies={props.isFetchingMovies}
        movies={props.movies}
        error={props.error}
        nominations={props.nominations}
      />
    </>
  );
}
