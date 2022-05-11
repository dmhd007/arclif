import React from "react";
import Navbar from "./Navbar";
import "./styles/UserProfilePage3.css";

function UserProfilePage3() {
  return (
    <div className="main ">
      <Navbar />
      <div id="first">
        <span>
          <p>plan details</p>
          <hr />
        </span>
        <div className="planDetails">
          <span className="planName">
            <p>Design Plan</p>
            <label>basic plan</label>
          </span>
          <div className="planPrice">
            <span>
              <p>amount</p>
              <label>RS 4999</label>
            </span>
          </div>
        </div>
      </div>
      <div id="second">
        <span>
          <p>additional pricing</p>
          <hr />
        </span>
        <div className="inputBox">
          <div className="layer1 row">
            <span className="col">
              <label>bathrooms</label>
              <input type="text" placeholder="f2" disabled />
            </span>
            <span className="col">
              <label>bathrooms</label>
              <input type="text" placeholder="f2" disabled />
            </span>
            <span className="col">
              <label>bathrooms</label>
              <input type="text" placeholder="f2" disabled />
            </span>
          </div>
          <div className="layer2 row">
            <span className="col">
              <label>bathrooms</label>
              <input type="text" placeholder="f2" disabled />
            </span>
            <span className="col">
              <label>bathrooms</label>
              <input type="text" placeholder="f2" disabled />
            </span>
            <span className="col">
              <label>bathrooms</label>
              <input type="text" placeholder="f2" disabled />
            </span>
          </div>
        </div>
      </div>
      <div id="third">
        <span>
          <p>Balance and payment</p>
          <hr />
        </span>
        <div className="layer row">
          <span className="col">
            <label>total</label>
            <input type="text" placeholder="10000" disabled />
          </span>
          <span className="col">
            <label>paid</label>
            <input type="text" placeholder="6000" disabled />
          </span>
          <span className="col">
            <label>balance</label>
            <input type="text" placeholder="4000" disabled />
          </span>
        </div>
        <a href="wwww.google.com">view amount details</a>
      </div>
      <button>pay now</button>
    </div>
  );
}

export default UserProfilePage3;
