import React, { Component } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
class ForecastWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forecast: [] };
  }
  componentDidMount() {
    console.log("fetching forecast");
    const url = "https://hko-forecast.glitch.me/hkoforecast";
    axios
      .get(url)
      .then(resp => {
        console.log(resp.data.forecast);
        const weatherArr = resp.data.forecast;
        var forecastArr = [];
        for (let i = 0; i < weatherArr.length; i++) {
          //console.log(weatherArr[i]);
          const temp = weatherArr[i].temp;
          temp.replace("C", "");
          const tempArr = temp.split("-");
          const minTempC = tempArr[0];
          const maxTempC = tempArr[1];
          console.log(minTempC + "---" + maxTempC);

          const dateArr = weatherArr[i].date.split(" ");
          const md = dateArr[0];
          const dayOfWeek = dateArr[1];
          const summary = weatherArr[i].Weather.split(".");
          /*console.log(
            ">"+
              md+
              ">>"+
              dayOfWeek+
              ">>>"+
              minTempC+
              "-"+
              maxTempC+
              ">>>>"+
              summary[0]
          );*/
          var index = i + 1;
          console.log("++++" + index);
          /*this.setState({
            [index]: {
              md: md,
              dayOfWeek: dayOfWeek,
              minTempC: minTempC,
              maxTempC: maxTempC,
              summary: summary[0]
            }
          });*/
          forecastArr.push({
            md: md,
            dayOfWeek: dayOfWeek,
            minTempC: minTempC,
            maxTempC: maxTempC,
            summary: summary[0]
          });
        }
        console.log("****************************");
        console.log(forecastArr);
        this.setState({ forecast: forecastArr });
      }) //then
      .catch(err => {
        console.log(err);
      });

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>end component did mount");
  }
  render() {
    console.log("forecast");
    console.log(this.state);
    console.log(this.state.forecast);

    let forecast = this.state.forecast;
    console.log(">>");
    console.log(forecast);
    forecast = forecast.slice(0, 4);
    var forecastRender = forecast.map((weather, i) => (
      <span className="">
        <WeatherCard
          key={i}
          title={weather.md}
          minTempC={weather.minTempC}
          maxTempC={weather.maxTempC}
          summary={weather.summary}
        />
      </span>
    ));
    console.log(forecastRender);

    return <div className="row">{forecastRender}</div>;
  }
}

export default ForecastWeather;
