import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import SelectArea from "./SelectArea";
import "./Header.css";

export default function Header() {
  const [isShowUp, setIsShowUp] = useState(false);

  return (
    <header>
      <div className={"wrapper-container"}>
        <div className={"Header"}>Service finder</div>
        <CgMenu
          className={"hamburger"}
          onClick={() => setIsShowUp(!isShowUp)}
        />
      </div>
      <SelectArea
        className={isShowUp ? "selectArea.show" : "selectArea.hide"}
      />
    </header>
  );
}
