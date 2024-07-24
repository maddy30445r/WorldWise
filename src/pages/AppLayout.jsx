import React from "react";
import Sidebar from "../Sidebar";
import Map from "../Map";

function AppLayout() {
  return (
    <div className=" p-5">
      <div className="min-w-[[calc(100vw-2.5rem)]] min-h-[calc(100vh-2.5rem)] overflow-auto bg-[#2D3439]  flex ">
        <Sidebar/>
        <Map/>



      </div>
    </div>
  );
}

export default AppLayout;
