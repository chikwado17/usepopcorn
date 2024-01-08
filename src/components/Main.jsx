import React from "react";
import ListBox from "./ListMovies/ListBox";
import WatchedBox from "./watchedMovie/WatchedBox";

const Main = ({ movies, watched }) => {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox watched={watched} />
    </main>
  );
};

export default Main;
