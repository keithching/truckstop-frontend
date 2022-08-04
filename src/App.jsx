import React, { useState } from "react";

import "./App.css";
import Map from "./components/Map";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

export default function App() {
  //STATE
  const [restaurant, setRestaurant] = useState("");
  const [truckService, setTruckService] = useState("");
  const [amenity, setAmenity] = useState("");

  const [searchResult, setSearchResult] = useState();

  //USEEFFECTS

  //Handlers

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
      <Header id="custom-header" />
      <Map id="map" />
      <SearchForm
        id="searchform"
        setRestaurant={setRestaurant}
        setTruckService={setTruckService}
        setAmenity={setAmenity}
        setSearchResult={setSearchResult}
        test={test}
      />
    </div>
  );
}
