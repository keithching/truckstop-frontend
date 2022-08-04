import React from "react";
import { CgMenu } from "react-icons/cg";
import SelectArea from "./SelectArea";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className={"wrapper-container"}>
        <div className={"Header"}>Service finder</div>
        <CgMenu
          className={"hamburger"}
          onClick={() => console.log("select state and city!!")}
        />
      </div>
      <SelectArea />
    </header>
  );
}
