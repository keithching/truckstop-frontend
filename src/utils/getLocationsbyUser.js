import { useState, useEffect } from "react";
import {
  getLocations,
  getAmenities,
  getGasPrices,
  getRestaurants,
  getAllLocations,
  getTruckServices,
} from "./dataFromServer";

const getByUserLocation = (input) => {
  return getLocations(input);
};

//const getByServiceLocation

const combineDetailsbyLocations = async () => {
  //console.log(`BEGINNINT OF COMBINE DETAILS`);
  const resultArray = [];
  const allLocations = await getAllLocations();
  const truckServices = await getTruckServices();
  const amenities = await getAmenities();
  const gasPrices = await getGasPrices();
  const restaurants = await getRestaurants();

  //console.log(`COMBINE DETAILS FUNCTION RAN`);

  for (const location of allLocations.data) {
    //console.log(`TEST LOCATIONS ${typeof location.latitude}`);
    const id = location.site_id;
    const services = getTruckServicesBySiteId(id, truckServices);
    const selectrestaurants = getRestaurantsBySiteId(id, restaurants);
    const selectamenities = getAmenitiesBySiteId(id, amenities);
    const selectGasPrices = getGasPricesBySiteId(id, gasPrices);
    const fullDetails = new LocationFullDetails(
      location,
      services,
      selectrestaurants,
      selectamenities,
      selectGasPrices
    );
    //console.log(`FULL DETAILS ${JSON.stringify(fullDetails)}`);
    resultArray.push(fullDetails);
  }
  //console.log(resultArray);
  return resultArray;
};

class LocationFullDetails {
  constructor(location, truck_services, restaurants, amenities, gas_prices) {
    this.site_id = location.site_id;
    this.name = location.name;
    this.position = { lat: location.latitude, lng: location.longitude };
    this.highway = location.highway;
    this.phone_number = location.phone_number;
    this.state = location.state;
    this.city = location.city;
    this.truck_services = truck_services;
    this.restaurants = restaurants;
    this.amenities = amenities;
    this.gas_prices = gas_prices;
  }
}

const getTruckServicesBySiteId = (siteId, truckServices) => {
  const data = truckServices.data.filter(
    (service) => service.locations_site_id === siteId
  );

  return data.map((el) => {
    return el.service_name;
  });
};

const getAmenitiesBySiteId = (siteId, amenities) => {
  const data = amenities.data.filter(
    (amenity) => amenity.locations_site_id === siteId
  );

  return data.map((el) => {
    return el.amenity_name;
  });
};

const getRestaurantsBySiteId = (siteId, restaurants) => {
  const data = restaurants.data.filter(
    (restaurant) => restaurant.locations_site_id === siteId
  );

  return data.map((el) => {
    return el.restaurant_name;
  });
};

const getGasPricesBySiteId = (siteId, gasPrices) => {
  return gasPrices.data.filter((gas) => gas.locations_site_id === siteId)[0];
};

export { getByUserLocation, combineDetailsbyLocations };
