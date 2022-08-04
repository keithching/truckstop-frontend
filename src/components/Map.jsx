import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
require("dotenv").config();

export default function Map(props) {
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (id) => {
    if (id === activeMarker) {
      return;
    }
    setActiveMarker(id);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  const markers = [];

  if (!props.allLocations.data) {
    return <></>;
  }
  const location = props.allLocations.data;

  for (let i = 0; i < location.length; i++) {
    markers.push({
      id: location[i].site_id,
      name: location[i].name,
      position: { lat: location[i].latitude, lng: location[i].longitude },
      highway: location[i].highway,
      phone_number: location[i].phone_number,
    });
  }

  if (loadError) return <div> The MAP is Unable to Load </div>;

  return isLoaded ? (
    <GoogleMap
      zoom={4}
      center={{ lat: 39.5, lng: -98.35 }}
      mapContainerClassName="map-container"
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers.map(({ id, name, position, highway, phone_number }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <div id="w_name">{name}</div>
                <div id="w_highway">{highway}</div>
                <div id="w_phone_number">{phone_number}</div>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}
