import React from "react";
import placeHolderImage from "../../../placeholder-image.jpg";

export default function NominatedMovie(props) {
  const { movie, removeNomination } = props;
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
        <button className="btn" onClick={() => removeNomination(movie)}>
          Remove
        </button>
      </p>
    </div>
  );
}
