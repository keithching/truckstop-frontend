import React, { useMemo } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import { fetchLocations } from "../slices/locationsSlice";
//import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
require("dotenv").config();
//import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export default function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  if (!isLoaded) return <div className="map">Map Loading....</div>;

  return <NewMap props={props} />;
}

function NewMap(props) {
  const center = useMemo(() => ({ lat: 25.7392, lng: -104.9903 }), []);
  //console.log(props.props.allLocations.data);
  const markers = [];
  const location = props.props.allLocations.data;
  //console.log(location);
  for (let i = 0; i < location.length; i++) {
    // console.log(location[i].site_id);
    // console.log(location[i].name);
    // console.log(location[i].latitude);
    // console.log(location[i].longitude);
    markers.push({ lat: location[i].latitude, lng: location[i].longitude });
    //   markers.push({
    //     id: location[i].site_id,
    //     name: location[i].name,
    //     position: { lat: location[i].latitude, lng: location[i].longitude },
    //   });
    // console.log(marker);
    // markers.push(marker);
  }
  console.log(markers);

  return (
    <GoogleMap
      zoom={4}
      center={center}
      mapContainerClassName="map-container"
      mapContainerStyle={{ width: "100%", height: "100vh" }}
    >
      <Marker position={{ lat: 25.7392, lng: -104.9903 }} />

      {markers.map((position, index) => (
        <Marker
          key={index}
          position={position}
          // onClick={() => handleActiveMarker(id)}
        >
          {/* {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null} */}
        </Marker>
      ))}
    </GoogleMap>
  );
}
