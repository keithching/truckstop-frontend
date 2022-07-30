import React from "react";

export default function SearchForm(props) {
  const restaurantList = [
    "--Choose an option--",
    "Arby's",
    "Subway",
    "McDonald's",
    "Chester's",
    "Godfather's Pizza",
    "IHOP Express",
    "Hardee's",
    "FlyingK Subs Burritos",
    "Baskin Robbins",
    "Taco Bell",
    "Carl's Jr.",
    "FlyingK Subs",
    "Denny's",
    "Del Taco",
    "Wendy's",
  ];

  const serviceList = [
    "--Choose an option--",
    "National Tire Account",
    "Light Mechanical",
    "TirePass",
    "Commercial Truck Oil Change",
  ];

  const amenityList = [
    "--Choose an option--",
    "Private Showers",
    "CAT Scales",
    "Wireless Internet",
    "ATM",
    "Transflo",
    "Overnight Parking",
    "RV Dump",
    "DEF Bulk Dispensers",
    "RF Service",
    "Bulk Propane",
    "Hotel Nearby",
    "CNG",
    "CNG Fast Fill",
    "Laundry Facilities",
  ];

  return (
    <>
      <div>SearchForm</div>
      <form action="filterLocations" onSubmit={props.test}>
        <label htmlFor="truck_services" id="truck_services">
          Truck Services:
        </label>
        <select
          onChange={(e) => {
            props.setTruckService(e.target.value);
          }}
        >
          {serviceList.map((service) => (
            <option key={service} value={serviceList.indexOf(service)}>
              {service}
            </option>
          ))}
        </select>
        <label htmlFor="amenities" id="amenities">
          Amenities:
        </label>
        <select
          onChange={(e) => {
            props.setAmenity(e.target.value);
          }}
        >
          {amenityList.map((amenity) => (
            <option key={amenity} value={amenityList.indexOf(amenity)}>
              {amenity}
            </option>
          ))}
        </select>
        <label htmlFor="restaurants" id="restaurants">
          Restaurants:
        </label>
        <select
          onChange={(e) => {
            props.setRestaurant(e.target.value);
          }}
        >
          {restaurantList.map((rest) => (
            // <option key={restaurantList.indexOf(rest)} value={rest}>
            <option key={rest} value={restaurantList.indexOf(rest)}>
              {rest}
            </option>
          ))}
        </select>
        <input type="submit" value="Search" />
      </form>
    </>
  );
}
