import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <NavLink to={"/"}>Rick and Morty</NavLink>
      <NavLink to={"characters"}>Characters</NavLink>
      <NavLink to={"locations"}>Locations</NavLink>
      <NavLink to={"episodes"}>Episodes</NavLink>
    </>
  );
};

export default MainNavigation;
