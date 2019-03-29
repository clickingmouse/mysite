import React from "react";
import backgroundImg from "../../images/layout/hong-kong-ariel.jpg";
//import image from "../../images/layout/";
import quarrybayImg from "../../images/layout/quarry-bay.jpg";
import "./header.css";

export default function Header() {
  return (
    <div>
      <header
        style={{
          backgroundImage: "url(" + backgroundImg + ")"
        }}
      />
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
              <a class="waves-effect waves-light btn-large teal lighten-2">
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
