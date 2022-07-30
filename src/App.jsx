import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
//import Map from "./components/Map";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

export default function App() {
  //STATE
  const [restaurant, setRestaurant] = useState("");
  const [truckService, setTruckService] = useState("");
  const [amenity, setAmenity] = useState("");

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
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.jsx</code> and save to reload.
      </p>
      <Header id="custom-header" />
      {/* <Map id="map" /> */}
      <SearchForm
        id="searchform"
        setRestaurant={setRestaurant}
        setTruckService={setTruckService}
        setAmenity={setAmenity}
        test={test}
      />
    </div>
  );
}
