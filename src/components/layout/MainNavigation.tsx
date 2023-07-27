import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4">
      <div>
        <NavLink className="text-2xl" to={"/"}>
          Rick and Morty
        </NavLink>
      </div>
      <NavLink to={"characters"}>Characters</NavLink>
      <NavLink to={"locations"}>Locations</NavLink>
      <NavLink to={"episodes"}>Episodes</NavLink>
    </div>
  );
};

export default MainNavigation;
