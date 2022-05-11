import React from "react";
import Navbar from "./Navbar";
import "./styles/UserProfilePage2.css";

function UserProfilePage2() {
  return (
    <div className="main">
      <Navbar />
      <div id="second">
        <span>
          <p>plan details</p>
          <hr />
        </span>
        <input type="text" placeholder="design plan" disabled />
        <a href="www.google.com">view details about plan</a>
      </div>
      <div id="third">
        <span>
          <p>additional details</p>
          <hr />
        </span>
        <div className="inputBox">
          <div className="layer1 row">
            <div className="col">
              <label>space</label>
              <input type="text" placeholder="f1" disabled />
            </div>
            <div className="col">
              <label>space</label>
              <input type="text" placeholder="f1" disabled />
            </div>
            <div className="col">
              <label>space</label>
              <input type="text" placeholder="f1" disabled />
            </div>
          </div>
          <div className="layer2 row">
            <div className="col">
              <label>space</label>
              <input type="text" placeholder="f1" disabled />
            </div>
            <div className="col">
              <label>space</label>
              <input type="text" placeholder="f1" disabled />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage2;
