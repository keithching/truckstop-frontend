import axios from "axios";

const server = "https://truck-stop-test.herokuapp.com/api/";

const getAllLocations = () => {
  return axios.get(`${server}locations`);
};

const getLocations = (queryParams) => {
  let searchString;
  if (queryParams) {
    if (queryParams.state && queryParams.city) {
      searchString = `?state=${queryParams.state}&city=${queryParams.city}`;
    }
    if (!queryParams.city) {
      searchString = `?state=${queryParams.state}`;
    }
    return axios.get(`${server}locations${searchString}`);
  }
};

const getTruckServices = () => {
  return axios.get(`${server}truck-services`);
};

const getRestaurants = () => {
  return axios.get(`${server}restaurants`);
};

const getAmenities = () => {
  return axios.get(`${server}amentities`);
};

const getGasPrices = () => {
  return axios.get(`${server}gas-prices`);
};

const getSearchItems = () => {
  return axios.get(`${server}searchItems`);
};

export {
  getAllLocations,
  getLocations,
  getSearchItems,
  getTruckServices,
  getRestaurants,
  getAmenities,
  getGasPrices,
};
