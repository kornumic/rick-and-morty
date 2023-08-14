import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { loginCtx } from "../../App";

const MainNavigation = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onLogInHandler = () => {
    setIsLogin(true);
  };

  const onLogOutHandler = () => {
    setIsLogin(false);
  };

  return (
    <div className="bg-[#181818] flex flex-row-2 justify-between">
      <div className=" py-4 flex flex-row">
        <div className="flex flex-col justify-center text-center text-2xl w-64 h-12  mx-6 align-bottom font-thin">
          <NavLink className="text-3xl" to={"/"}>
            Rick and Morty
          </NavLink>
        </div>
        {isLogin && (
          <div className="flex flex-col text-center justify-center w-40 h-12 text-xl uppercase align-bottom transition-all font-thin">
            <NavLink
              className={({ isActive }) => (isActive ? "nav-active" : "")}
              to={"library"}
            >
              Library
            </NavLink>
          </div>
        )}
        <div className="flex flex-col text-center justify-center w-40 h-12 text-xl uppercase align-bottom transition-all font-thin">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to={"characters"}
          >
            Characters
          </NavLink>
        </div>
        <div className="flex flex-col text-center justify-center  w-40 h-12 text-xl uppercase align-bottom transition-all font-thin">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to={"locations"}
          >
            Locations
          </NavLink>
        </div>
        <div className="flex flex-col text-center justify-center w-32 h-12 text-xl uppercase align-bottom transition-all font-thin">
          <NavLink
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            to={"episodes"}
          >
            Episodes
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {!isLogin && (
          <NavLink to="/">
            <button className="btn-primary mx-6" onClick={onLogInHandler}>
              Sign in
            </button>
          </NavLink>
        )}
        {isLogin && (
          <NavLink to="/">
            <button className="btn-primary mx-6" onClick={onLogOutHandler}>
              Log out
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default MainNavigation;
