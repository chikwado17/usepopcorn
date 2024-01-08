import React from "react";
import Search from "./navbar/Search";
import NumResults from "./navbar/NumResults";
import Logo from "./navbar/Logo";

const NavBar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
};

export default NavBar;
