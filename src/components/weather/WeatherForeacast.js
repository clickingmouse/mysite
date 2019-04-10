import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";

const info = {
  id: 1819730,
  name: "Hong Kong Special Administrative Region",
  country: "HK",
  coord: {
    lon: 114.166672,
    lat: 22.25
  }
};

class WeatherForecast extends React.Component {
  componentDidMount() {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    console.log("component did mount");
    console.log(process.env);
    console.log(API_KEY);

    const proxy = "https://cors.now.sh";
    //const url = "http://rss.weather.gov.hk/rss/SeveralDaysWeatherForecast.xml";
    const url =
      "https://api.openweathermap.org/data/2.5/forecast?id=1819730&appid=";

    //https://developer.yahoo.com/weather/documentation.html#oauth-javascript
    /*, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          Accept: "application/json"
          //"Content-Type": "text/xsl"
        },
        withCredentials: true,
        credentials: "same-origin",
        mode: "no-cors"
      })
      */

    console.log(url + API_KEY);
    axios
      .get(url + API_KEY)
      .then(response => {
        console.log("response is :");
        console.log(response);
        const forecast = {};
        //const today = Date.now();
        const today = new Date();
        console.log(
          "today is " +
            today.getFullYear() +
            " :month is: " +
            today.getMonth() +
            ":day is:" +
            today.getDate()
        );
        const todayDate =
          today.getMonth() + "-" + today.getDate() + "-" + today.getFullYear();
        console.log(todayDate);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });

    console.log("end of component dit mount");
  }

  render() {
    return (
      <div className="container">
        7-Days Forecast
        <WeatherCard date={"today"} tempC={25} tempF={73.4} />
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
