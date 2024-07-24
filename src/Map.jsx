import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { usecities } from "./context/CitiesContext";
import { UseGeolocation } from "./hooks/UseGeolocation";
import User from "./User";

function Map() {
  const [mappos, setmappos] = useState([51.505, -0.09]);
  const { cities } = usecities();
  const [searchparams, setsearchparams] = useSearchParams();
  const navigate = useNavigate();

  const { loadingpos, positionmap, getlocation } = UseGeolocation();
  const lat = searchparams.get("lat");
  const lng = searchparams.get("lng");

  // searchparams.get(lat);
  // searchparams.get(lng);
  useEffect(
    function () {
      if (lat && lng) setmappos([lat, lng]);
    },
    [lat, lng]
  );

  useEffect(
    function () {
      if (positionmap) {
        setmappos([positionmap.latitude, positionmap.longitude]);
        navigate(
          `form?lat=${positionmap.latitude}&lng=${positionmap.longitude}`
        );
      }
    },
    [positionmap]
  );

  return (
    <>
      <div className="w-[65%]  bg-slate-300 relative">
        {
          <button
            onClick={getlocation}
            className="w-fit absolute z-[1000] left-[50%] translate-x-[-50%] bottom-[5%] my-2 bg-green-500 text-md rounded-md  text-black font-semibold  px-3 py-1   text-center uppercase">
            {loadingpos ? "Loading..." : "Use your position"}
          </button>
        }
        <User />

        {/*  //not reactive this center so when pos changes it doesnt automatically changres the center.*/}
        <MapContainer
          center={mappos}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {cities.map((city) => (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}>
              <Popup>{city.cityName}</Popup>
            </Marker>
          ))}

          <Centerchange position={mappos} />
          <Detectclick />
        </MapContainer>
      </div>
    </>
  );
}

function Centerchange({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function Detectclick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => {
      // console.log(e)
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
