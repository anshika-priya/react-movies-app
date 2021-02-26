import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Favourite = () => {
  const { favourite } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Favourite Movies</h1>

          <span className="count-pill">
            {favourite.length} {favourite.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {favourite.length > 0 ? (
          <div className="movie-grid">
            {favourite.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="favourite" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
