import React from "react";

function UserProfile(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,

    //icons
    addPhotoIcon,
    logoArclif061,
    backgroundButton,
    cartIcon,
    demoImage,
    detailsIcon,
    planIcon,
    uploadIcon,
    uploadSectionIcon,
    yourPhotosIcon,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-profilescreen">
        <div className="flex-col">
          <div className="flex-row">
            <img className="logo-arclif-06-1" src={logoArclif061} alt="" />
            <div className="group-1">
              <img className="vector" src={detailsIcon} alt="" />
              <div className="personal-detailspoppins-medium-blue-lagoon-16px">
                <span className="poppins-medium-blue-lagoon-16px">
                  {spanText1}
                </span>
              </div>
            </div>
            <div className="group-2">
              <img className="vector-1" src={planIcon} alt="" />
              <div className="plan-design-detailspoppins-normal-black-16px">
                <span className="poppins-normal-black-16px">{spanText2}</span>
              </div>
            </div>
            <div className="group-container">
              <div className="overlap-group7">
                <div className="numberpoppins-normal-black-10px">
                  <span className="poppins-normal-black-10px">{spanText3}</span>
                </div>
              </div>
              <div className="group-4">
                <img className="vector-2" src={cartIcon} alt="" />
                <div className="your-cartpoppins-normal-black-16px">
                  <span className="poppins-normal-black-16px">{spanText4}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-8"></div>
        </div>
        <div className="flex-row-1">
          <div className="flex-col-1">
            <div className="personal-details-1poppins-semi-bold-black-19px">
              <span className="poppins-semi-bold-black-19px">{spanText5}</span>
            </div>
            <div className="rectangle-11"></div>
            <div className="overlap-group1">
              <div className="name-of-customerpoppins-normal-boulder-16px">
                <span className="poppins-normal-boulder-16px">{spanText6}</span>
              </div>
            </div>
            <div className="overlap-group">
              <div className="mobile-numberpoppins-normal-boulder-16px">
                <span className="poppins-normal-boulder-16px">{spanText7}</span>
              </div>
            </div>
            <div className="flex-row-2">
              <div className="upload-your-own-plot-imagepoppins-semi-bold-black-19px">
                <span className="poppins-semi-bold-black-19px">
                  {spanText8}
                </span>
              </div>
              <img className="vector-3" src={uploadSectionIcon} alt="" />
            </div>
            <div className="rectangle-18"></div>
            <img className="rectangle-14" src={demoImage} alt="" />
            <div
              className="overlap-group3"
              style={{ backgroundImage: `url(${backgroundButton})` }}
            >
              <div className="upload-photopoppins-semi-bold-white-16px">
                <span className="poppins-semi-bold-white-16px">
                  {spanText9}
                </span>
              </div>
              <img className="group-8" src={uploadIcon} alt="" />
            </div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group-1">
              <div className="adressspoppins-normal-boulder-16px">
                <span className="poppins-normal-boulder-16px">
                  {spanText10}
                </span>
              </div>
            </div>
            <div className="overlap-group">
              <div className="e-mail-idpoppins-normal-boulder-16px">
                <span className="poppins-normal-boulder-16px">
                  {spanText11}
                </span>
              </div>
            </div>
            <div className="overlap-group-2">
              <img className="vector-4" src={addPhotoIcon} alt="" />
              <div className="add-photopoppins-medium-cod-gray-16px">
                <span className="poppins-medium-cod-gray-16px">
                  {spanText12}
                </span>
              </div>
            </div>
          </div>
          <div className="overlap-group-container-1">
            <div className="overlap-group-1">
              <div className="locationpoppins-normal-boulder-16px">
                <span className="poppins-normal-boulder-16px">
                  {spanText13}
                </span>
              </div>
            </div>
            <div className="overlap-group6">
              <div className="your-photospoppins-normal-boulder-16px">
                <span className="poppins-normal-boulder-16px">
                  {spanText14}
                </span>
              </div>
              <img className="vector-5" src={yourPhotosIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
