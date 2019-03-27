import React from "react";
import backgroundImg from "../../images/layout/hong-kong-ariel.jpg";
//import image from "../../images/layout/";
import "./header.css";

export default function Header() {
  return (
    <div>
      <header
        style={{
          backgroundImage: "url(" + backgroundImg + ")"
        }}
      />
    </div>
  );
}
