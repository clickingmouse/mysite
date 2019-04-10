import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
//class WeatherForecast extends React.Component
import axios from "axios";

class TodayWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      temp: "",
      tempMinC: "",
      tempmaxC: "",
      summary: "",
      icon: ""
    };
  }

  weatherIcon(description) {
    const weatherIcons = [
      "sunny",
      "lightClouds",
      "cloudy",
      "lightShowers",
      "rainy",
      "heavy rain"
    ];
    const weatherIconsLegend = {
      sunny: "fas fa-sun fa-5x",
      lightClouds: "fas fa-cloud-sun fa-5x",
      cloudy: "fas fa-cloud fa-5x",
      lightShowers: "cloud-sun-rain fa5x",
      rainy: "fas fa-cloud-showers-heavy fa-5x",
      thunderstorm: "",
      unknown: "fas fa-question fa-5x"
    };
    console.log("determining icon");
    console.log(description.main);
    console.log(description.description);
    const weatherMain = description.main.toLowerCase();
    const weatherDescription = description.description.toLowerCase();
    var icon = "";
    switch (weatherMain) {
      case "clear":
        icon = weatherIconsLegend.sunny;
        break;
      case "clouds":
        icon = weatherIconsLegend.lightClouds;
        console.log(weatherDescription.search(/overcast clouds/));
        if (weatherDescription.search(/overcast clouds/) == 1) {
          console.log("cloudy~!");
          icon = weatherIconsLegend.cloudy;
        }
        break;
      case "drizzle":
      case "rain":
        icon = weatherIconsLegend.lightShowers;
        if (weatherDescription.search(/heavy/)) {
          icon = weatherIconsLegend.rainy;
        }
        break;
      case "thunderstorm":

      default:
        icon = weatherIconsLegend.unknown;
    }
    console.log("icon is: ");
    console.log(icon);
    return icon;
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?id=1819730&units=metric&appid=";
    console.log(url + API_KEY);
    axios
      .get(url + API_KEY)
      .then(response => {
        console.log("response is :");
        console.log(response);
        console.log(response.data.weather[0].description);
        this.setState({
          icon: this.weatherIcon(response.data.weather[0]),
          date: "-=today=-",
          tempMinC: response.data.main.temp_min,
          tempMaxC: response.data.main.temp_max,
          summary: response.data.weather[0].description
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });

    console.log("end of component dit mount");
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <WeatherCard
          title={this.state.date}
          date="date"
          icon={this.state.icon}
          minTempC={this.state.tempMinC}
          maxTempC={this.state.tempMaxC}
          summary={this.state.summary}
          tempF="tempF"
        />
      </div>
    );
  }
}

export default TodayWeather;
