import React from "react";
import "./styles/UserProfilePage1.css";
import DetailsInput from "./DetailsInput";
import Navbar from "./Navbar";

function UserProfilePage1() {
  return (
    <div>
      <div className="main">
        <Navbar />

        <div id="second">
          <span>
            <p>personaldetails</p>
            <hr />
          </span>
          <div id="details">
            <DetailsInput />
            <DetailsInput />
          </div>
        </div>
        <div id="third">
          <span>
            <p>upload your own plot image</p>
            <img
              src="./assets/uploadMainIcon.png"
              alt=""
              width="17px"
              height="11px"
            />
          </span>
          <hr />
          <div id="imageUpload">
            <div>
              <img
                src="./assets/demoIcon.png"
                alt=""
                width="350px"
                height="275px"
                classNameName="mt-4 mb-4"
              />
              {/* button */}

              <button className="mt-4 upload">
                <label className="paraBtn">Upload</label>
                <img
                  src="./assets/uploadButton.png"
                  alt=""
                  width="26px"
                  height="26px"
                />
              </button>
            </div>
            <div className="addButton">
              <img
                src="./assets/addPhotoIcon.png"
                alt=""
                width="49px"
                height="49px"
              />
              <p>Add Photo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage1;
