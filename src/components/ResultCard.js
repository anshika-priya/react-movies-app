import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const {
    addMovieToFavourite,
    favourite,
  } = useContext(GlobalContext);

  let storedMovie = favourite.find((o) => o.id === movie.id);
  let storedMovieFavourite = favourite.find((o) => o.id === movie.id);

  const favouriteDisabled = storedMovie
    ? true
    : storedMovieFavourite
    ? true
    : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={favouriteDisabled}
            onClick={() => addMovieToFavourite(movie)}
          >
            Add to Favourite
          </button>
        </div>
      </div>
    </div>
  );
};
