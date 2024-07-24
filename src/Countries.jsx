import React from "react";
import Country from "./Country";
import { ThreeDots } from "react-loader-spinner";
import { usecities } from "./context/CitiesContext";

function Countries( ) {
  
  const{cities,loading}=usecities();
  // const newcountries=
  return (
    <div className="countries w-[90%] overflow-auto max-h-80 grid grid-cols-2 gap-3     ">
      {loading ? (
        <div className="mx-auto">
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
        </div>
      ) : !cities.length ? (
        <div className="text-white text-lg  mx-auto ">
          No cities found...☹️<br></br>Start Your Journey Now.
        </div>
      ) : (
        cities.reduce(function (acc, curr) {
          if (!acc.includes(curr.country)) {
            return [...acc, curr.country];
          } else {
            return acc;
          }
        }, []).map((country) => <Country key={country} Country={country} />)
      )}
    </div>
  );
}

export default Countries;
