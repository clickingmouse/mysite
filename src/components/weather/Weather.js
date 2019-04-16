import React from "react";
import TodayWeather from "./TodayWeather";
import ForecastWeather from "./ForecastWeather";
const divStyle = {
  //display: "flex"
  //alignItems: "center"
};

export default function Weather() {
  return (
    <div id="weather" style={divStyle} className="container row">
      <span className="">
        <TodayWeather />
      </span>
      <span className="">
        <ForecastWeather />
      </span>
    </div>
  );
}
