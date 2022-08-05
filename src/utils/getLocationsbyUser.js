import { useState, useEffect } from "react";
import { getLocations, getAllLocations } from "./dataFromServer";

const getByUserLocation = async (input) => {
  const params = {};
  if (input.city && input.state) {
    params.city = input.city;
    params.state = input.state;
    return getLocations(params);
  }
  if (!input.city) {
    params.state = input.state;
    return getLocations(params);
  }
  //return getAllLocations();
};

//const getByServiceLocation

export { getByUserLocation };
