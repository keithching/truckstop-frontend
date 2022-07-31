import React from "react";
import { restaurants, services, amenities } from "../testDB.json";

export default function SearchForm(props) {
  return (
    <>
      <div>SearchForm</div>
      <form action="filterLocations" onSubmit={props.test}>
        <label htmlFor="truck_services" id="truck_services">
          Truck Services:
        </label>
        <select
          onBlur={(e) => {
            props.setTruckService(e.target.value);
          }}
        >
          <option key={"ServiceDefault"} value="0">
            --Choose an option--
          </option>
          {services.map((service) => (
            <option key={service} value={services.indexOf(service)}>
              {service}
            </option>
          ))}
        </select>
        <label htmlFor="amenities" id="amenities">
          Amenities:
        </label>
        <select
          onBlur={(e) => {
            props.setAmenity(e.target.value);
          }}
        >
          <option key={"AmenDefault"} value="0">
            --Choose an option--
          </option>
          {amenities.map((amenity) => (
            <option key={amenity} value={amenities.indexOf(amenity)}>
              {amenity}
            </option>
          ))}
        </select>
        <label htmlFor="restaurants" id="restaurants">
          Restaurants:
        </label>
        <select
          onBlur={(e) => {
            props.setRestaurant(e.target.value);
          }}
        >
          <option key={"RestDefault"} value="0">
            --Choose an option--
          </option>
          {restaurants.map((rest) => (
            <option key={rest} value={restaurants.indexOf(rest)}>
              {rest}
            </option>
          ))}
        </select>
        <input type="submit" value="Search" />
      </form>
    </>
  );
}
