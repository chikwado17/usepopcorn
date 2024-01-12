import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched, onRemoveWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          onRemoveWatched={onRemoveWatched}
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
