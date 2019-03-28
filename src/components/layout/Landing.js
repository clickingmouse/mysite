import React from "react";
import backgroundImg from "../../images/layout/hong-kong-ariel.jpg";
//import image from "../../images/layout/";
import landingImg from "../../images/layout/hong-kong-ariel-1920.jpg";
import quarrybayImg from "../../images/layout/quarry-bay.jpg";
import "./header.css";

export default function Landing() {
  return (
    <div>
      <div id="test" className="parallax-container center valign-wrapper test1">
        <div className="container">
          <div className="row">
            <div className="col s12 white-text">
              <h2 className="teal-text teal-text lighten-2">
                Parallax Template
              </h2>
              <p>
                A modern responsive front-end framework based on Material Design
              </p>
            </div>
          </div>
        </div>

        <div className="parallax">
          <img src={landingImg} alt="" className=" landingImg" />
        </div>
      </div>

      <div className="container">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        possimus magni eveniet quae porro voluptatibus, in quibusdam dicta
        minima, nisi laudantium autem odio perferendis architecto est similique
        unde eius accusantium?
      </div>
      <div className="parallax-container">
        <div class="container">
          <div class="row">
            <div class="col s12 white-text">
              <h2 class="teal-text teal-text lighten-2">Parallax Template</h2>
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
      <div className="container">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        possimus magni eveniet quae porro voluptatibus, in quibusdam dicta
        minima, nisi laudantium autem odio perferendis architecto est similique
        unde eius accusantium?
      </div>
    </div>
  );
}
