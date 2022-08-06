import React from "react";
import "./Modal.css";

const Modal = ({ setShowModal, setState }) => {
  const handleClick = () => {
    console.log("hi");
    setShowModal((prev) => !prev);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("update clicked");
    // const updateBtn = document.getElementById("updateBtn");
    const radioBtns = document.querySelectorAll('input[name="state"]');
    for (const radioBtn of radioBtns) {
      if (radioBtn.checked) {
        setState(radioBtn.value);
        console.log(`${radioBtn.value} checked`);
        break;
      }
    }
    setShowModal((prev) => !prev);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div></div>
          {/* <div className="header-text">User Setting</div> */}
          <button onClick={handleClick}>close</button>
        </div>
        <div className="modal-main">
          <form action="">
            <label htmlFor="stateInput">State: </label>
            <br />

            <input type="radio" name="state" id="AL" value="AL" />
            <label htmlFor="AL">Alabama</label>

            <input type="radio" name="state" id="AR" value="AR" />
            <label htmlFor="AR">Arkansas</label>

            <input type="radio" name="state" id="AZ" value="AZ" />
            <label htmlFor="AZ">Arizona</label>

            <br />

            <input type="radio" name="state" id="CA" value="CA" />
            <label htmlFor="CA">California</label>

            <input type="radio" name="state" id="CO" value="CO" />
            <label htmlFor="CO">Colorado</label>

            <input type="radio" name="state" id="FL" value="FL" />
            <label htmlFor="FL">Florida</label>

            <br />

            <input type="radio" name="state" id="GA" value="GA" />
            <label htmlFor="GA">Georgia</label>

            <input type="radio" name="state" id="IA" value="IA" />
            <label htmlFor="IA">Iowa</label>

            <input type="radio" name="state" id="ID" value="ID" />
            <label htmlFor="ID">Idaho</label>

            <br />

            <input type="radio" name="state" id="IL" value="IL" />
            <label htmlFor="IL">Illinois</label>

            <input type="radio" name="state" id="IN" value="IN" />
            <label htmlFor="IN">Indiana</label>

            <input type="radio" name="state" id="KS" value="KS" />
            <label htmlFor="KS">Kansas</label>

            <br />

            <input type="radio" name="state" id="KY" value="KY" />
            <label htmlFor="KY">Kentucky</label>

            <input type="radio" name="state" id="LA" value="LA" />
            <label htmlFor="LA">Louisiana</label>

            <input type="radio" name="state" id="MD" value="MD" />
            <label htmlFor="MD">Maryland</label>

            <br />

            <input type="radio" name="state" id="MI" value="MI" />
            <label htmlFor="MI">Michigan</label>

            <input type="radio" name="state" id="MN" value="MN" />
            <label htmlFor="MN">Minnesota</label>

            <input type="radio" name="state" id="MO" value="MO" />
            <label htmlFor="MO">Missouri</label>

            <br />

            <input type="radio" name="state" id="MS" value="MS" />
            <label htmlFor="MS">Mississippi</label>

            <input type="radio" name="state" id="MT" value="MT" />
            <label htmlFor="MT">Montana</label>

            <input type="radio" name="state" id="NC" value="NC" />
            <label htmlFor="NC">North Carolina</label>

            <br />

            <input type="radio" name="state" id="ND" value="ND" />
            <label htmlFor="ND">North Dakota</label>

            <input type="radio" name="state" id="NE" value="NE" />
            <label htmlFor="NE">Nebraska</label>

            <input type="radio" name="state" id="NJ" value="NJ" />
            <label htmlFor="NJ">New Jersey</label>

            <br />

            <input type="radio" name="state" id="NM" value="NM" />
            <label htmlFor="NM">New Mexico</label>

            <input type="radio" name="state" id="NV" value="NV" />
            <label htmlFor="NV">Nevada</label>

            <input type="radio" name="state" id="NY" value="NY" />
            <label htmlFor="NY">New York</label>

            <br />

            <input type="radio" name="state" id="OH" value="OH" />
            <label htmlFor="OH">Ohio</label>

            <input type="radio" name="state" id="OK" value="OK" />
            <label htmlFor="OK">Oklahoma</label>

            <input type="radio" name="state" id="OR" value="OR" />
            <label htmlFor="OR">Oregon</label>

            <br />

            <input type="radio" name="state" id="PA" value="PA" />
            <label htmlFor="PA">Pennsylvania</label>

            <input type="radio" name="state" id="SC" value="SC" />
            <label htmlFor="SC">South Carolina</label>

            <input type="radio" name="state" id="SD" value="SD" />
            <label htmlFor="SD">South Dakota</label>

            <br />

            <input type="radio" name="state" id="TN" value="TN" />
            <label htmlFor="TN">Tennessee</label>

            <input type="radio" name="state" id="TX" value="TX" />
            <label htmlFor="TX">Texas</label>

            <input type="radio" name="state" id="UT" value="UT" />
            <label htmlFor="UT">Utah</label>

            <br />

            <input type="radio" name="state" id="VA" value="VA" />
            <label htmlFor="VA">Virginia</label>

            <input type="radio" name="state" id="WA" value="WA" />
            <label htmlFor="WA">Washington</label>

            <input type="radio" name="state" id="WI" value="WI" />
            <label htmlFor="WI">Wisconsin</label>

            <br />

            <input type="radio" name="state" id="WV" value="WV" />
            <label htmlFor="WV">West Virginia</label>

            <input type="radio" name="state" id="WY" value="WY" />
            <label htmlFor="WY">Wyoming</label>

            <br />

            <button onClick={handleUpdate} type="submit" id="updateBtn">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
