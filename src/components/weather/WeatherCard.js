import React from "react";

export default function WeatherCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s2 m2 l2">
          <div className="card blue lighten-5">
            <div className="card-title">
              <h5 className="center">TODAY</h5>
            </div>
            <i className="far fa-sun fa-6x" />
            <p>lorem </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col s12 l6" />
      </div>
    </div>
  );
}
