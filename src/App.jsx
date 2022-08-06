import React, { useState, useEffect } from "react";
//import axios from "axios";

import "./App.css";
import Map from "./components/Map";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import { getAllLocations, getSearchItems } from "./utils/dataFromServer";
import {
  getByUserLocation,
  combineDetailsbyLocations,
} from "./utils/getLocationsbyUser";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  //STATE
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [truckService, setTruckService] = useState("");
  const [amenity, setAmenity] = useState("");
  const [gasPrices, getGasPrices] = useState([]);
  // eslint-disable-next-line
  const [searchResult, setSearchResult] = useState();
  // eslint-disable-next-line
  const [dropDownList, setDropDownList] = useState({});
  // eslint-disable-next-line
  const [allLocations, setAllLocations] = useState([]);
  const [locationDetails, setLocationDetails] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Modal
  const [showModal, setShowModal] = useState(false);

  // EFFECT
  useEffect(() => {
    getTotalLocations();
    getDropdownList();
    pitzByUserLocation();
    makeLocationDetails();
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, [allLocations]);

  useEffect(() => {
    if (selectedLocations)
      console.log(`SELECTED LOCATIONS ___${JSON.stringify(selectedLocations)}`);
  }, [selectedLocations]);

  useEffect(() => {
    if (state) pitzByUserLocation(state);
    if (state) console.log(`THE USER INPUT in STATE FOR LOCATION ${state}`);
  }, [state]);

  // HANDLER
  const getDropdownList = async () => {
    const lists = await getSearchItems();
    setDropDownList(lists.data);
  };

  const getTotalLocations = async () => {
    const locs = await getAllLocations();
    setAllLocations(locs.data);
  };

  const makeLocationDetails = async () => {
    const locations = await combineDetailsbyLocations();
    setLocationDetails(locations);
    // console.log(allLocations);
  };

  const pitzByUserLocation = async (state) => {
    console.log("state in pitzbyuserlocation: ", state);
    const params = {
      state: state || "",
      city: "",
    };

    //console.log(params);

    const locations = await getByUserLocation(params);
    console.log("XXXXXXXX locations: ", locations.data);
    setSelectedLocations(locations.data);
  };

  const pitzBySearch = async (e) => {};

  const test = (e) => {
    e.preventDefault();
    ////call search list
    console.log("here");
    console.log(`restaurant: ${restaurant}`);
    console.log(`truckService: ${truckService}`);
    console.log(`amenity: ${amenity}`);
  };

  //RENDER
  return (
    <div className="App" style={{ height: "100%" }}>
      <Header />
      {isLoaded ? (
        <Map
          id="map"
          allLocations={allLocations}
          selectedLocations={selectedLocations}
          locationDetails={locationDetails}
        />
      ) : null}
      {/* <SearchForm
        id="searchform"
        dropDownList={dropDownList}
        setRestaurant={setRestaurant}
        setTruckService={setTruckService}
        setAmenity={setAmenity}
        setSearchResult={setSearchResult}
        test={test}
      /> */}
      <Footer setShowModal={setShowModal} />
      {showModal ? (
        <Modal setShowModal={setShowModal} setState={setState} />
      ) : null}
    </div>
  );
}
