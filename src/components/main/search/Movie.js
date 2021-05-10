import React from "react";
import placeHolderImage from "../../../placeholder-image.jpg";

export default function Movie(props) {
  const { movie, nominateMovie } = props;

  function isMovieNominated(movieObject, nominatedMovies) {
    const movieIndex = nominatedMovies.findIndex(
      (movieObj) => movieObj.imdbID === movieObject.imdbID
    );
    return movieIndex < 0 ? false : true;
  }

  return (
    <div className="movie">
      <div className="movie__image-wrapper">
        <img
          src={movie.Poster === "N/A" ? placeHolderImage : movie.Poster}
          className="image"
          alt={movie.Title}
          width="300"
          height="445"
        />
      </div>
      <p className="movieTitle">{movie.Title}</p>
      <p className="movieReleaseDate">{movie.Year}</p>
      <p>
        <button
          className="btn"
          style={
            isMovieNominated(movie, props.nominations) === true
              ? { cursor: "not-allowed" }
              : null
          }
          onClick={
            isMovieNominated(movie, props.nominations) === true
              ? undefined
              : () => nominateMovie(movie)
          }
        >
          Nominate
        </button>
      </p>
    </div>
  );
}
