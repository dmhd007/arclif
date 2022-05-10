import "./App.css";
import React from "react";
import UserProfile from "./components/UserProfile";

const userProfileData = {
  spanText1: "Personal Details",
  spanText2: "Plan & Design Details",
  spanText3: "1",
  spanText4: "Your Cart",
  spanText5: "Personal Details",
  spanText6: "Name of customer",
  spanText7: "Mobile Number",
  spanText8: "Upload Your Own Plot Image",
  spanText9: "Upload Photo",
  spanText10: "Adresss",
  spanText11: "E mail id",
  spanText12: "Add Photo",
  spanText13: "Location",
  spanText14: "Your Photos",

  // icons

  logoArclif061: "assets/logoarclif.png",
  cartIcon: "assets/cartIcon.png",
  uploadIcon: "assets/uploadButton.png",
  uploadSectionIcon: "assets/uploadMainIcon.png",
  yourPhotosIcon: "assets/yourPhotos.png",
  demoImage: "assets/demoIcon.png",
  addPhotoIcon: "assets/addPhotoIcon.png",
  planIcon: "assets/planIcon.png",
  detailsIcon: "assets/detailsIcon.png",
  backgroundButton: "assets/backgroundButton.png",
};

function App() {
  return <UserProfile {...userProfileData} />;
}

export default App;
