import React from "react";
import Movie from "./Movie";
import LoadingSym from "./LoadingSym";
import Error from "./Error";

export default function SearchResults(props) {
  if (props.isFetchingMovies) {
    return <LoadingSym />;
  }
  if (props.error.hasError) {
    return <Error message={props.error.message} />;
  }
  return (
    <div className="search-results">
      {props.movies.map((movie, index) => (
        <Movie
          movie={movie}
          nominateMovie={props.nominateMovie}
          key={`${movie.imdbID}_${index}` }
          nominations={props.nominations}
        />
      ))}
    </div>
  );
}
