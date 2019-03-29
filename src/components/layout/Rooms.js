import React from "react";

import quarrybayImg from "../../images/layout/quarrybay_scaled2.jpg";
import budgetImg from "../../images/rooms/budget_room.JPG";
import "./css/rooms.css";

export default function Rooms() {
  return (
    <div id="rooms" className="parallax-container quarrybay-container center">
      <div className="container">
        <div className="row">
          <div className="col s12 l4 white-text">
            <h2 className="teal-text lighten-2">Welcome</h2>

            <img src={budgetImg} alt="" className="responsive-img" />

            <p>
              A modern responsive front-end framework based on Material Design
            </p>
            <a className="waves-effect waves-light btn-large teal lighten-2">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="parallax">
        <img src={quarrybayImg} alt="" className="responsive-img" />
      </div>
    </div>
  );
}
