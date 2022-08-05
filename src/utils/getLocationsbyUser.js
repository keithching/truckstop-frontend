import { useState, useEffect } from "react";
import {
  getLocations,
  getAllLocations,
  getTruckServices,
} from "./dataFromServer";

const getByUserLocation = (input) => {
  return getLocations(input);
};

//const getByServiceLocation

// const combineDetailsbyLocation = () => {
//   const resultArray = [];
// };

// class LocationFullDetails {
//   constructor (location) {
//     this.site_id = location.site_id;
//     this.name = location.name;
//     this.position = {lat: location.latitude, lng: location.longitude,};
//     this.highway = location.highway;
//     this.phone_number = location.phone_number;
//     this.state = location.state;
//     this.city = location.city;
//   }
// };

// const getTruckServicesBySiteId = async (siteId) => {
//   const resultArr = [];
//   const services = await getTruckServices();

//   return resultArr
// }

export { getByUserLocation };
