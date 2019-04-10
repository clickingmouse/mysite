import React from "react";
import TodayWeather from "./TodayWeather";
import ForecastWeather from "./ForecastWeather";
export default function Weather() {
  return (
    <div>
      Todays Weather
      <TodayWeather />
      <ForecastWeather />
      Future Outlook
    </div>
  );
}
