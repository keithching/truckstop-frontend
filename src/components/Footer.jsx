import React from "react";
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

  return (
    <div>
      <select
        name={data ? data.type : ""}
        id={data.type}
        className="select-dropdown"
        defaultValue="default"
      >
        {data ? (
          <option value="default"> -- select {data.type} -- </option>
        ) : null}
        {data
          ? data.array.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })
          : null}
      </select>
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

const SearchForm = ({ className }) => {
  // TODO: pull from states, or fetch call from API
  const amenities = new dropdownList("amenity", ["1", "2"]);
  const restaurants = new dropdownList("restaurant", ["3", "4"]);
  const truckServices = new dropdownList("truckService", ["5", "6"]);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    // may revisit document.getElementById used in a React setting
    const amenityInput = document.getElementById(`amenity`).value;
    const restaurantInput = document.getElementById(`restaurant`).value;
    const truckServiceInput = document.getElementById(`truckService`).value;
    // TODO: set states here
  };

  return (
    <form action="" className={className} onSubmit={handleFormSubmission}>
      <SearchDropdownList data={amenities} />
      <SearchDropdownList data={restaurants} />
      <SearchDropdownList data={truckServices} />
      <SearchButton />
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

const Footer = ({ setShowModal }) => {
  return (
    <div className="footer-container">
      <div className="footer">
        <UserSettingButton setShowModal={setShowModal} />
        <SearchForm className="searchForm" />
      </div>
    </div>
  );
};

export default Footer;
