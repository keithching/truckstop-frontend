import React, { useState, useEffect } from "react";

import { getAllLocations, getSearchItems } from "./utils/dataFromServer";
import {
  getByUserLocation,
  combineDetailsbyLocations,
} from "./utils/getLocationsbyUser";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import "./App.css";

export default function App() {
  //STATE
  const [state, setState] = useState("");
  // const [city, setCity] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [truckService, setTruckService] = useState("");
  const [amenity, setAmenity] = useState("");
  // const [gasPrices, getGasPrices] = useState([]);
  // const [searchResult, setSearchResult] = useState();
  const [dropDownList, setDropDownList] = useState({});
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
    if (state) pitzByUserLocation(state);
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
  };

  const pitzByUserLocation = async (state) => {
    const params = {
      state: state || "",
      city: "",
    };
    const locations = await getByUserLocation(params);
    setSelectedLocations(locations.data);
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
          restaurant={restaurant}
          amenity={amenity}
          truckService={truckService}
        />
      ) : null}
      <Footer
        setShowModal={setShowModal}
        dropDownList={dropDownList}
        setAmenity={setAmenity}
        setRestaurant={setRestaurant}
        setTruckService={setTruckService}
      />
      {showModal ? (
        <Modal setShowModal={setShowModal} setState={setState} />
      ) : null}
    </div>
  );
}
