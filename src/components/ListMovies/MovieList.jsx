import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie onMovieSelect={onMovieSelect} movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MovieList;
