import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav>
        <img src="./assets/logoarclif.png" alt="" width="145px" height="53px" />
        <div id="nav">
          <span>
            <img
              src="./assets/detailsIcon.png"
              alt=""
              width="28px"
              height="28px"
            />
            <a href="wwww.google.com">personaldetails</a>
          </span>
          <span>
            <img
              src="./assets/planIcon.png"
              alt=""
              width="28px"
              height="28px"
            />
            <a href="wwww.google.com">plan&design details</a>
          </span>
          <span>
            <img
              src="./assets/cartIcon.png"
              alt=""
              width="28px"
              height="28px"
            />
            <a href="wwww.google.com">your cart</a>
          </span>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
