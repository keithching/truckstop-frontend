import React from "react";
import "./Modal.css";

const Modal = ({ setShowModal }) => {
  const handleClick = () => {
    console.log("hi");
    setShowModal((prev) => !prev);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div></div>
          <div className="header-text">User Setting</div>
          <button onClick={handleClick}>close</button>
        </div>
        <div className="modal-main">
          <form action="">
            <label htmlFor="stateInput">State</label>
            <input type="text" placeholder="state" id="stateInput" />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
