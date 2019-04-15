import React from "react";

export default function WeatherCard(props) {
  console.log("debug WeatherCard:");
  console.log(props);
  return (
    <div className="col s4 m2 l2">
      <div className="card blue lighten-5">
        <div className="card-title">
          <h5 className="center">{props.title}</h5>
        </div>

        <i className={props.icon} />
        <p>{props.summary}</p>
        <p>
          {props.minTempC}C - {props.maxTempC}C
        </p>
      </div>

      <div className="row">
        <div className="col s12 l6" />
      </div>
    </div>
  );
}
