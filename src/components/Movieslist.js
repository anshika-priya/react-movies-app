import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Movieslist = () => {
  const [results, setResults] = useState([]);

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/4/list/10?api_key=${process.env.REACT_APP_TMDB_KEY}&language=English&sort_by=vote_average.asc`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };
  return (
    <div className="add-page ">
      <div className="container ">
          <h1>Popular Movies</h1>
        <div>{getMovies()}</div>
        <div className="add-content">
          {results.length > 0 && (
            <ul className="results image-container d-flex justify-content-start m-3">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
