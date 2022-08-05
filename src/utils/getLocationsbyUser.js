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

const combineDetailsbyLocations = () => {
  const resultArray = [];
  // default: state (around 10 truck-stops)

  //const loc = pull all locations
  //const truck =
  //contst rest =pull all services
  //loop through locations
  //for each location filter truck, rest, amenties
  //build new class location
  //push to array
  //return array
};

class LocationFullDetails {
  constructor(location, truck_services, restaurants) {
    this.site_id = location.site_id;
    this.name = location.name;
    this.position = { lat: location.latitude, lng: location.longitude };
    this.highway = location.highway;
    this.phone_number = location.phone_number;
    this.state = location.state;
    this.city = location.city;
    this.truck_services = truck_services;
    this.restaurants = restaurants;
  }
}

// const getTruckServicesBySiteId = async (siteId) => {
//   const resultArr = [];
//   const services = await getTruckServices();

//   return resultArr
// }

export { getByUserLocation };
