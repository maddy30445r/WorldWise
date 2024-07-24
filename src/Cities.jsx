import React, { useEffect, useState } from "react";
import City from "./City";
import { ThreeDots } from "react-loader-spinner";
import { usecities } from "./context/CitiesContext";

function Cities() {
  const{cities,loading}=usecities();
  return (
    <div className="w-[80%] flex flex-col gap-4 max-h-80 overflow-auto items-center ">
      {loading ? (
        // <div>Loading...</div>
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
      ) : !cities.length ? (
        <div className="text-white text-lg ">
          No cities found...☹️<br></br>Start Your Journey Now.
        </div>
      ) : (
        cities.map((city) => <City key={city.id} city={city} />)
      )}
    </div>
  );
}

export default Cities;
