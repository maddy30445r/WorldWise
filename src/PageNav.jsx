import React from "react";
import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div className="w-full flex  justify-between p-2">
      <NavLink className="navbar" to="/">

      <img className="w-[200px] h-[50px] " src="/public/logo.png " alt="" />
      </NavLink>

      <div className="flex space-x-8 uppercase text-md text-white items-center cursor-pointer">
        <NavLink className="navbar" to="/pricing">
          <div>Pricing</div>
        </NavLink>
        <NavLink className="navbar" to="/product">
          <div>Product</div>
        </NavLink>
        <NavLink to="/login">

        <button className="mx-auto bg-green-500 text-md rounded-md  text-black font-semibold  px-3 py-1   text-center uppercase">
          Login
        </button>{" "}
        </NavLink>
      </div>
    </div>
  );
}

export default PageNav;
