import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import Map from "./components/Map";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  //STATE
  const [restaurant, setRestaurant] = useState("");
  const [truckService, setTruckService] = useState("");
  const [amenity, setAmenity] = useState("");
  // eslint-disable-next-line
  const [searchResult, setSearchResult] = useState();
  // eslint-disable-next-line
  const [dropDownList, setDropDownList] = useState({});
  // eslint-disable-next-line
  const [allLocations, setAllLocations] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Modal
  const [showModal, setShowModal] = useState(false);

  // EFFECT
  useEffect(() => {
    getAllLocations();
    //getDropdownList();
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, [allLocations]);

  // HANDLER
  const getDropdownList = async () => {
    const returnObj = {};
    await axios
      .get("https://truck-stop-test.herokuapp.com/api/truck-services")
      .then((response) => {
        // console.log(response);
        // return response;
        returnObj.truckServices = response;
      });
    const restaurants = await axios
      .get("https://truck-stop-test.herokuapp.com/api/restaurants")
      .then((response) => {
        console.log(response);
        return response;
      });
    await axios
      .get("https://truck-stop-test.herokuapp.com/api/amenities")
      .then((response) => {
        console.log(response);
        return response;
      });
  };

  const getAllLocations = async () => {
    await axios
      .get("https://truck-stop-test.herokuapp.com/api/locations")
      .then((response) => {
        console.log(response);
        setAllLocations(response);
      });
  };

  const test = (e) => {
    e.preventDefault();
    console.log("here");
    console.log(`restaurant: ${restaurant}`);
    console.log(`truckService: ${truckService}`);
    console.log(`amenity: ${amenity}`);
  };

  //RENDER
  return (
    <div className="App" style={{ height: "100%" }}>
      <Header />
      {isLoaded ? <Map id="map" allLocations={allLocations} /> : null}
      {/* <SearchForm
        id="searchform"
        setRestaurant={setRestaurant}
        setTruckService={setTruckService}
        setAmenity={setAmenity}
        setSearchResult={setSearchResult}
        // test={test}
      /> */}
      <Footer setShowModal={setShowModal} />
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}
