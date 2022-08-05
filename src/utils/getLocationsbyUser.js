import { useState, useEffect } from "react";
import { getLocations, getAllLocations } from "./dataFromServer";

const getByUserLocation = async (city, state) => {
  const params = {};
  if (city && state) {
    params.city = city;
    params.state = state;
    return getLocations(params);
  }
  //return getAllLocations();
};

//const getByServiceLocation

export { getByUserLocation };
