import React from "react";
import "./Footer.css";

const SearchDropdownList = () => {
  return (
    <div>
      <select name="" id="">
        <option value="123">ABC</option>
        <option value="456">DEF</option>
        <option value="789">GHI</option>
      </select>
    </div>
  );
};

const SearchButton = () => {
  return <button type="submit">search</button>;
};

const SearchForm = ({ className }) => {
  return (
    <form action="" className={className}>
      <SearchDropdownList />
      <SearchDropdownList />
      <SearchDropdownList />
      <SearchButton />
    </form>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <SearchForm className="searchForm" />
    </div>
  );
};

export default Footer;
