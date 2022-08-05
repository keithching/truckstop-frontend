import React from "react";
import "./Header.css";

const APP_NAME = "The Pitz";

const HamburgerMenu = ({ className }) => {
  return <div className={className}>🍔</div>;
};

export default function Header() {
  return (
    <div className="header">
      <h1 className="title">{APP_NAME}</h1>
      <HamburgerMenu className="hamburger" />
    </div>
  );
}
