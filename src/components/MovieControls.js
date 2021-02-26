import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromFavourite,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "favourite" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromFavourite(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
