import React from "react";
import { Link } from "react-router-dom";
import { usecities } from "./context/CitiesContext";

function getdate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newdate = new Date(date);
  return (
    months[newdate.getMonth()] +
    " " +
    newdate.getDate() +
    ", " +
    newdate.getFullYear()
  );
}

function City({ city }) {

  function handleclick(e){
    e.preventDefault();
    deletecity(id);
    
  }
  const { cityName, date, id, position } = city;
  const{currcity,deletecity}=usecities();
  // console.log(position);
  return (
    <Link
      className={`flex text-white w-full  bg-[#42484D] px-10 py-2 rounded-md border-l-4 border-l-green-400 gap-7 items-center cursor-pointer text-lg ${currcity.id==id?"border-2 border-green-400":""}`} 
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <div className="cityname font-medium">{cityName}</div>
      <span className="grow"></span>
      <div className="date text-base">({getdate(date)})</div>
      <div onClick={handleclick} className=" bg-[#242A2E] rounded-full w-6 h-6 font-medium text-center text-sm hover:bg-[#FFB545] hover:text-black cursor-pointer">
        x
      </div>
    </Link>
  );
}

export default City;
