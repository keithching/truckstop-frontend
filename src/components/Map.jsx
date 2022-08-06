import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
require("dotenv").config();

export default function Map(props) {
  const [activeMarker, setActiveMarker] = useState(null);
  const {
    locationDetails,
    selectedLocations,
    amenity,
    restaurant,
    truckService,
  } = props;
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    setLocation(props.allLocations);
  }, [props.allLocations]);

  useEffect(() => {
    // console.log(`🗾🗾🗾🗾🗾🗾${locationDetails}`);
    if (selectedLocations) {
      setLocation(selectedLocations);
    }
  }, [selectedLocations]);

  useEffect(() => {
    if (locationDetails.length > 0 && location.length > 0) {
      // console.log(`MAPPP LOOCALLL ___ ${location}`);
      const temp = [];

      for (let i = 0; i < location.length; i++) {
        const services = locationDetails.filter((loc) => {
          return loc.site_id === location[i].site_id;
        });
        //console.log(
        //   `🥲🥲🥲🥲🥲🥲🥲🥲 ${JSON.stringify(services[0].gas_prices)}`
        // );
        // console.log(`🚛 SERVICES ${services[0]}`);

        temp.push({
          id: location[i].site_id,
          name: location[i].name,
          position: { lat: location[i].latitude, lng: location[i].longitude },
          highway: location[i].highway,
          phone_number: location[i].phone_number,
          services: services[0].truck_services,
          restaurants: services[0].restaurants,
          gasPrices: services[0].gas_prices,
          amenities: services[0].amenities,
        });
        console.log({ temp });
      }

      // fitler by the selected items
      console.log("❤️");
      if (restaurant || amenity || truckService) {
        const filteredTemp = temp.filter((el) => {
          return (
            (restaurant === "default"
              ? true
              : el.restaurants.includes(restaurant)) &&
            (amenity === "default" ? true : el.amenities.includes(amenity)) &&
            (truckService === "default"
              ? true
              : el.services.includes(truckService))
          );
        });
        setMarkers(filteredTemp);
      } else {
        setMarkers(temp);
      }

      // if (filteredTemp.length > 0) {
      //   // selected
      //   console.log(filteredTemp);
      //   setMarkers(filteredTemp);
      // } else {
      //   // deafult
      //   console.log("d", temp);
      //   setMarkers(temp);
      // }
    }
  }, [locationDetails, location, amenity, restaurant, truckService]);

  const handleActiveMarker = (id) => {
    if (id === activeMarker) {
      return;
    }
    setActiveMarker(id);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  if (!props.allLocations) {
    return <></>;
  }

  if (loadError) return <div> The MAP is Unable to Load </div>;

  return isLoaded ? (
    <GoogleMap
      zoom={4}
      center={{ lat: 39.5, lng: -98.35 }}
      mapContainerClassName="map-container"
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers
        ? markers.map(
            ({
              id,
              name,
              position,
              highway,
              phone_number,
              services,
              restaurants,
              gasPrices,
              amenities,
            }) => (
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
                      <div id="w_services">Service: {services}</div>
                      <div id="w_amenities">Amenities: {amenities}</div>
                      <div id="w_restaurants">Restaurants: {restaurants}</div>
                      {/* <div id="w_gasPrices">
                        Gas Prices: {JSON.stringify(gasPrices)}
                      </div> */}
                      <div>
                        Gas Prices:
                        {Object.keys(gasPrices).length > 0 ? (
                          Object.keys(gasPrices).map((gasPrice) => {
                            return (
                              <li key={gasPrice}>
                                {gasPrice}: {gasPrices[gasPrice]}
                              </li>
                            );
                          })
                        ) : (
                          <span>N/A</span>
                        )}
                      </div>
                    </div>
                  </InfoWindow>
                ) : null}
              </Marker>
            )
          )
        : null}
    </GoogleMap>
  ) : (
    <></>
  );
}
