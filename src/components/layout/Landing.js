import React from "react";
import backgroundImg from "../../images/layout/hong-kong-ariel.jpg";
//import image from "../../images/layout/";
import landingImg from "../../images/layout/hong-kong-ariel-1920.jpg";
//import quarrybayImg from "../../images/layout/quarry-bay.jpg";
import quarrybayImg from "../../images/layout/quarrybay_scaled2.jpg";
import budgetImg from "../../images/rooms/budget_room.JPG";
//import "./landing.css";

export default function Landing() {
  return (
    <div>
      <div id="hkariel" className="parallax-container center landing-container">
        <div className="container">
          <div className="row">
            <div className="col s12 white-text">
              <h2 className="teal-text teal-text lighten-2">
                Parallax Template
              </h2>
              <p className="deep-purple-text">All things about Hong Kong</p>
            </div>
          </div>
        </div>

        <div className="parallax">
          <img src={landingImg} alt="" className="responsive-img landingImg" />
        </div>
      </div>

      <div className="container">
        >> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        possimus magni eveniet quae porro voluptatibus, in quibusdam dicta
        minima, nisi laudantium autem odio perferendis architecto est similique
        unde eius accusantium?
      </div>
      <div className="parallax-container quarrybay-container">
        <div class="container">
          <div class="row">
            <div class="col s12 l4 white-text">
              <h2 class="teal-text teal-text lighten-2">Welcome</h2>

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
          <img src={quarrybayImg} alt="" className="" />
        </div>
      </div>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        possimus magni eveniet quae porro voluptatibus, in quibusdam dicta
        minima, nisi laudantium autem odio perferendis architecto est similique
        unde eius accusantium?
      </div>
      <section className="container section" id="rooms">
        <div className="row">
          <div className="col s12 l4">
            <img src={budgetImg} alt="" className="responsive-img" />
          </div>
          <div className="col s12 m6 l6">
            <h2 className="indigo-text text-darken-4">ROOM </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis
              mollitia reiciendis sint harum. Quas quidem maxime nulla excepturi
              sit a ratione natus labore error assumenda, libero nisi debitis
              obcaecati?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
