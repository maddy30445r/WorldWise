import { useState } from "react";

// import React from 'react'

export function UseGeolocation(defaultposition = null) {
  const [error, seterror] = useState(null);
  const [loadingpos, setloadingpos] = useState(false);
  const [positionmap, setPositionmap] = useState(defaultposition);
  function getlocation() {
    if (!navigator.geolocation) {
      return seterror({
        positionerror: "Please give permission to get the location🗺️",
      });
    }
    setloadingpos(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setPositionmap({ latitude, longitude });
        setloadingpos(false);
      },
      (error) => {
        seterror({ positionerror: error.message });
        setloadingpos(false);
      }
    );
  }
  return { error, loadingpos, positionmap, getlocation };
}
