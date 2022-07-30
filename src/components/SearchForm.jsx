import React from "react";

export default function SearchForm() {
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

  const test = (e) => {
    console.log(e);
  };

  return (
    <>
      <div>SearchForm</div>
      <form action="filterLocations">
        <label htmlFor="truck_services" id="truck_services">
          Truck Services:
        </label>
        <select>
          {serviceList.map((service) => (
            <option key={serviceList.indexOf(service)} value={service}>
              {service}
            </option>
          ))}
        </select>
        <label htmlFor="amenities" id="amenities">
          Amenities:
        </label>
        <select>
          {amenityList.map((amenity) => (
            <option key={amenityList.indexOf(amenity)} value={amenity}>
              {amenity}
            </option>
          ))}
        </select>
        <label htmlFor="restaurants" id="restaurants">
          Restaurants:
        </label>
        <select>
          {restaurantList.map((rest) => (
            <option key={restaurantList.indexOf(rest)} value={rest}>
              {rest}
            </option>
          ))}
        </select>
        <input type="submit" value="Search" onSubmit={test()} />{" "}
      </form>
    </>
  );
}
