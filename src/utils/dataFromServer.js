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
    return axios.get(`${server}locations${searchString}`);
  }
};

const getSearchItems = () => {
  return axios.get(`${server}searchItems`);
};

export { getAllLocations, getSearchItems, getLocations };
