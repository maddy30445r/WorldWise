import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { usecities } from "./context/CitiesContext";
import { ThreeDots } from "react-loader-spinner";

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

function CityDetails() {
    const navigate=useNavigate();
  const { getCity, currcity, loading } = usecities();
  const { id } = useParams();
  const{cityName,date,notes}=currcity;
  useEffect(
    function () {
      getCity(id);
      
    },
    [id,getCity]
  );

  if (loading) { 
    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }

  return (
    <div className= {`productmain mx-auto rounded-md bg-[#42484D]  flex w-[80%] flex-col px-8 py-3 gap-6 }`}>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-[#AAAAAA] font-medium">CITY NAME</div>
        <div className="text-2xl text-white font-medium">
          {cityName}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-[#AAAAAA] font-medium uppercase">You went to {cityName} on</div>
        <div className="text-base text-white ">
          {getdate(date)}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-[#AAAAAA] font-medium">YOUR NOTES</div>
        <div className="text-base text-white ">
          {notes}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-[#AAAAAA] font-medium">LEARN MORE</div>
        <a target="_blank" className="" href={`https://en.wikipedia.org/wiki/${cityName}`}>
        <div className="text-base  text-yellow-500 underline cursor-pointer ">
          Check out {cityName} on Wikipedia →
        </div>
        </a>
      </div>
      <div className="flex flex-col gap-1">
      <button  onClick={function(){
           
            navigate(-1);

        }} className="self-start my-2 bg-transparent text-md rounded-md border-2 border-white text-white font-normal  px-3 py-1   text-center uppercase">
        {"←"} Back
        </button>{" "}
      </div>
    </div>
  );
}

export default CityDetails;
