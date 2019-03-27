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
