import React, { useMemo, useState } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import { fetchLocations } from "../slices/locationsSlice";
//import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
require("dotenv").config();
//import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export default function Map(props) {
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (id) => {
    if (id === activeMarker) {
      return;
    }
    setActiveMarker(id);
    console.log("Active Maker ID:", id);
  };

  console.log("before isLoaded");
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  // if (!isLoaded) return <div className="map">Map Loading....</div>;
  // console.log("isLoaded");

  const markers = [];
  console.log(props);
  if (!props.allLocations.data) {
    console.log(`LOCATION DATA NOT LOADED`);
    return <></>;
  }
  const location = props.allLocations.data;
  console.log(location);

  for (let i = 0; i < location.length; i++) {
    markers.push({
      id: location[i].site_id,
      name: location[i].name,
      position: { lat: location[i].latitude, lng: location[i].longitude },
    });
  }
  console.log(markers);

  if (loadError) return <div> The MAP is Unable to Load </div>;

  return isLoaded ? (
    <GoogleMap
      zoom={4}
      center={{ lat: 25.7392, lng: -104.9903 }}
      mapContainerClassName="map-container"
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {/* <Marker position={{ lat: 25.7392, lng: -104.9903 }} /> */}

      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}
