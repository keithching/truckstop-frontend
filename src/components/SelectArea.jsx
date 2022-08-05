import React, { useState } from "react";
import "./SelectArea.css";

export default function SelectArea({ className }) {
  // set state

  // useEffect

  // handlerfunction for swiching button to state and city
  return (
    <nav className={className}>
      <div className={"select-form"}>
        <form action="">
          <select name="state" id="state"></select>
          <select name="city" id="city"></select>
        </form>
      </div>
    </nav>
  );
}
