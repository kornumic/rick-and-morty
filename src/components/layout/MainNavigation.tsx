import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="py-6">
      <NavLink className="text-2xl uppercase px-6 align-bottom" to={"/"}>
        Rick and Morty
      </NavLink>
      <NavLink
        className="text-xl uppercase px-6 align-bottom"
        to={"characters"}
      >
        Characters
      </NavLink>
      <NavLink className="text-xl uppercase px-6 align-bottom" to={"locations"}>
        Locations
      </NavLink>
      <NavLink className="text-xl uppercase px-6 align-bottom" to={"episodes"}>
        Episodes
      </NavLink>
    </div>
  );
};

export default MainNavigation;
