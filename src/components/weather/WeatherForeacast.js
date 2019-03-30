import React, { Component } from "react";
import WeatherCard from "./WeatherCard"
class WeatherForecast extends React.Component {
  render() {
    return (
      <div className="container">
        7-Days Forecast
        <WeatherCard />
        <table>
          <thead>
            <tr>
              <th>Today</th>
              <th>Tomorrow</th>
              <th>xx-xx-+2</th>
              <th>xx-xx-+3</th>
              <th>xx-xx-+4</th>
              <th>xx-xx-+5</th>
              <th>xx-xx-+6</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>T</td>
              <td>Temperature</td>
              <td>Temperature</td>
              <td>Temperature</td>
              <td>Temperature</td>
              <td>Temperature</td>
              <td>Temperature</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default WeatherForecast;
