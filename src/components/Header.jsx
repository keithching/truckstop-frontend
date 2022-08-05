import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import SelectArea from "./SelectArea";
import "./Header.css";

const APP_NAME = "The Pitz";

export default function Header() {
  const [isShowUp, setIsShowUp] = useState(false);

  return (
    <header className="header-container">
      <div className={"wrapper-container"}>
        <h1
          className={"Header"}
          // className="title"
        >
          {APP_NAME}
        </h1>
        <CgMenu
          className={"hamburger"}
          onClick={() => {
            setIsShowUp(!isShowUp);
            console.log("hi");
          }}
        />
      </div>
      {isShowUp ? <SelectArea /> : null}
    </header>
  );
}
