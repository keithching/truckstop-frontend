import React, { useState, useEffect } from "react";
import "./Footer.css";

// a class for creating dropdown list object
class dropdownList {
  constructor(type, array) {
    this.type = type;
    this.array = array;
  }
}

const SearchDropdownList = (props) => {
  const { data } = props;

  console.log(data.type);

  return (
    <div>
      {data ? (
        <select
          name={data ? data.type : ""}
          id={data.type}
          className="select-dropdown"
          defaultValue="default"
        >
          {data.type ? (
            <option value="default"> -- select {data.type} -- </option>
          ) : null}
          {data.type
            ? data.array.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })
            : null}
        </select>
      ) : null}
      {/* {JSON.stringify(data.type)} */}
    </div>
  );
};

const SearchButton = () => {
  return (
    <button type="submit" className="dropdown-search-btn">
      🔍
    </button>
  );
};

const SearchForm = ({
  className,
  dropDownList,
  setAmenity,
  setRestaurant,
  setTruckService,
}) => {
  // TODO: pull from states, or fetch call from API
  const [amenities, setAmenities] = useState({});
  const [restaurants, setRestaurants] = useState({});
  const [truckServices, setTruckServices] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (Object.keys(dropDownList).length > 0) {
      console.log(dropDownList);
      setAmenities(new dropdownList("amenity", [...dropDownList.amenities]));
      setRestaurants(
        new dropdownList("restaurant", [...dropDownList.restaurants])
      );
      setTruckServices(
        new dropdownList("truckService", [...dropDownList.truckServices])
      );
    }
  }, [dropDownList]);

  useEffect(() => {
    if (amenities && restaurants && truckServices) {
      setIsFetched(true);
    }
  }, [amenities, restaurants, truckServices]);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    // may revisit document.getElementById used in a React setting
    const amenityInput = document.getElementById(`amenity`).value;
    const restaurantInput = document.getElementById(`restaurant`).value;
    const truckServiceInput = document.getElementById(`truckService`).value;
    // TODO: set states here
    setAmenity(amenityInput);
    setRestaurant(restaurantInput);
    setTruckService(truckServiceInput);
  };

  return (
    <form action="" className={className} onSubmit={handleFormSubmission}>
      {isFetched ? (
        <>
          <SearchDropdownList data={amenities} />
          <SearchDropdownList data={restaurants} />
          <SearchDropdownList data={truckServices} />
          <SearchButton />
        </>
      ) : null}
    </form>
  );
};

const UserSettingButton = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <button type="submit" className="user-setting-btn" onClick={handleClick}>
      ⚙
    </button>
  );
};

const Footer = ({
  setShowModal,
  dropDownList,
  setAmenity,
  setRestaurant,
  setTruckService,
}) => {
  return (
    <div className="footer-container">
      <div className="footer">
        <UserSettingButton setShowModal={setShowModal} />
        <SearchForm
          className="searchForm"
          dropDownList={dropDownList}
          setAmenity={setAmenity}
          setRestaurant={setRestaurant}
          setTruckService={setTruckService}
        />
      </div>
    </div>
  );
};

export default Footer;
