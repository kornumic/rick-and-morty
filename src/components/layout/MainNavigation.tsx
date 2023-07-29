import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="bg-[#181818] flex flex-row-2 justify-between">
      <div className=" py-4 flex flex-row">
        <div className="flex flex-col justify-center text-center text-2xl w-64 h-12 uppercase mx-6 align-bottom">
          <NavLink className="text-3xl" to={"/"}>
            Rick and Morty
          </NavLink>
        </div>
        <div className="flex flex-col text-center justify-center w-40 h-12 text-xl uppercase align-bottom transition-all">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to={"characters"}
          >
            Characters
          </NavLink>
        </div>
        <div className="flex flex-col text-center justify-center  w-40 h-12 text-xl uppercase align-bottom transition-all">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to={"locations"}
          >
            Locations
          </NavLink>
        </div>
        <div className="flex flex-col text-center justify-center  w-32 h-12 text-xl uppercase align-bottom transition-all">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to={"episodes"}
          >
            Episodes
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button className="btn-primary mx-6">Sign in</button>
      </div>
    </div>
  );
};

export default MainNavigation;
