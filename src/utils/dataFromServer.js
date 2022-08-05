import axios from "axios";

const server = "https://truck-stop-test.herokuapp.com/";

const getAllLocations = () => {
  return axios.get(`${server}api/locations`);
};

const getSearchItems = () => {
  return axios.get(`${server}api/searchItems`);
};

export { getAllLocations, getSearchItems };
