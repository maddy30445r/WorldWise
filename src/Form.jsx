import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { usecities } from "./context/CitiesContext";
function Form() {
    const{createcity,loading}=usecities();
  const [isload, setisload] = useState(false);
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [geoerror, setgeoerror] = useState("");
  const [date, setdate] = useState(new Date());
  const [notes, setnotes] = useState("");
  const [searchparams, setsearchparams] = useSearchParams();
  const lat = searchparams.get("lat");
  const lng = searchparams.get("lng");
  const navigate = useNavigate();

  async function handleform(e) {
    // const { name, value } = e.target;
    // setformdata({ ...formdata, [name]: value });
    e.preventDefault();
    if (!city || !date) return;
    const newcity = {
      cityName: city,
      country,
      date,
      notes,
      position: { lat, lng },
    };
    // console.log(newcity);
    await createcity(newcity);//this is an async function so will return promise isliye yhan await kraya.....
    // navigate("/cities");
    navigate("/app/cities");
  }

  useEffect(
    function () {
      if (!lat && !lng) return;
      async function fetchcitiesdata() {
        try {
          setgeoerror("");
          setisload(true);
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          if (!data.countryCode)
            throw new Error("Not a city....Please click somewhere else☹️");
          console.log(data);
          setcity(data.city || data.locality || "");
          setcountry(data.countryName);
        } catch (err) {
          setgeoerror(err.message);
        } finally {
          setisload(false);
        }
      }
      fetchcitiesdata();
    },
    [lat, lng]
  );
  if (geoerror)
    return (
      <div className="text-white text-lg font-medium uppercase">{geoerror}</div>
    );

  if (!lng && !lat)
    return (
      <div className="text-white text-lg font-medium uppercase">
        Start by clicking somewhere on the map...
      </div>
    );

  if (isload||loading) {
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
    <form
      onSubmit={handleform}
      className="productmain mx-auto rounded-md bg-[#42484D]  flex w-[450px] flex-col p-5 gap-2">
      <label className=" text-white text-lg" htmlFor="cityname">
        City Name
      </label>
      <input
        // onChange={}
        value={city}
        className="bg-[#D6DEE0] rounded-md py-[5px] px-1 outline-none"
        name="cityname"
        id="cityname"
        type="text"
      />
      <label className=" text-white text-lg" htmlFor="visdate">
        When did you go to?
      </label>
      {/* <input
        // onChange={handleform}
        value={""}
        className="bg-[#D6DEE0] rounded-md py-[5px] outline-none px-1"
        name="visdate"
        id="visdate"
        type="text"
      /> */}

      <DatePicker
        id="visdate"
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={(e) => setdate(e)}
        className="bg-[#D6DEE0] rounded-md py-[5px] outline-none px-1 w-full"
      />

      <label className=" text-white text-lg" htmlFor="notes">
        Notes about your trip to
      </label>
      <input
        onChange={(e) => setnotes(e.target.value)}
        value={notes}
        className="bg-[#D6DEE0] rounded-md py-[5px] outline-none px-1"
        name="notes"
        id="notes"
        type="text"
      />
      <div className="flex justify-between">
        <button
          type="submit"
          className="self-start my-2 bg-green-500 text-md rounded-md  text-black font-semibold  px-3 py-1   text-center uppercase">
          Add
        </button>{" "}
        <button
          onClick={function (e) {
            e.preventDefault();
            navigate(-1);
          }}
          className="self-start my-2 bg-white text-md rounded-md  text-black font-semibold  px-3 py-1   text-center uppercase">
          {"←"} Back
        </button>{" "}
      </div>
    </form>
  );
}

export default Form;
