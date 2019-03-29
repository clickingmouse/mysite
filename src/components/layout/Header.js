import React from "react";
import hongkongAriel from "../../images/layout/hong-kong-ariel-1920.jpg";
//import image from "../../images/layout/";
//import quarrybayImg from "../../images/layout/quarry-bay.jpg";
import "./css/header.css";

export default function Header() {
  return (
    <header>
      <div id="header" className="parallax-container header-container center">
        <div className="container">
          <div className="row">
            <div className="col s12  white-text">
              <h2 className="teal-text lighten-2">Welcome to my site !</h2>
              <p>All things about Hong Kong</p>
              <a className="waves-effect waves-light btn-large teal lighten-2">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="parallax">
          <img src={hongkongAriel} alt="" className="" />
        </div>
      </div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus
        quaerat nihil, ad non asperiores aliquam molestiae natus. Excepturi
        facere dolorum iure suscipit deserunt obcaecati aliquam nobis debitis
        vel! At, omnis?S
      </div>
    </header>
  );
}
