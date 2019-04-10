import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import CryptoJS from "crypto-js";
const $ = window.$;

const info = {
  id: 1819730,
  name: "Hong Kong Special Administrative Region",
  country: "HK",
  coord: {
    lon: 114.166672,
    lat: 22.25
  }
};

const yahoolink =
  "https://www.yahoo.com/news/weather/hong-kong/hong-kong/hong-kong-2165352";
const yahoobase =
  "https://weather-ydn-yql.media.yahoo.com/forecastrss?location=";
const yahoourl =
  "https://weather-ydn-yql.media.yahoo.com/forecastrss?woeid=2165352&format=json";

class WeatherForecast extends React.Component {
  componentDidMount() {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const YAHOO_APP_ID = process.env.REACT_APP_YAHOO_APP_ID;
    const YAHOO_WEATHER_CLIENT_ID =
      process.env.REACT_APP_YAHOO_WEATHER_CLIENT_ID;
    const YAHOO_WEATHER_CLIENT_SECRET =
      process.env.REACT_APP_YAHOO_WEATHER_CLIENT_SECRET;
    console.log("component did mount");
    console.log(process.env);
    console.log(API_KEY);
    console.log(YAHOO_APP_ID);
    console.log(YAHOO_WEATHER_CLIENT_ID);
    console.log(YAHOO_WEATHER_CLIENT_SECRET);
    const proxy = "https://cors.now.sh";
    //const url = "http://rss.weather.gov.hk/rss/SeveralDaysWeatherForecast.xml";
    const url_old =
      "https://api.openweathermap.org/data/2.5/forecast?id=1819730&appid=";
    const yahoourl =
      "https://weather-ydn-yql.media.yahoo.com/forecastrss?woid=2165352&format=json";
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
    var url = "https://weather-ydn-yql.media.yahoo.com/forecastrss";
    var method = "GET";
    var app_id = YAHOO_APP_ID;
    var consumer_key = YAHOO_WEATHER_CLIENT_ID;
    var consumer_secret = YAHOO_WEATHER_CLIENT_SECRET;
    var concat = "&";
    var query = { location: "hong-kong", format: "json" };
    var oauth = {
      oauth_consumer_key: consumer_key,
      oauth_nonce: Math.random()
        .toString(36)
        .substring(2),
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
      oauth_version: "1.0"
    };

    var merged = {};
    $.extend(merged, query, oauth);
    // Note the sorting here is required
    var merged_arr = Object.keys(merged)
      .sort()
      .map(function(k) {
        return [k + "=" + encodeURIComponent(merged[k])];
      });
    var signature_base_str =
      method +
      concat +
      encodeURIComponent(url) +
      concat +
      encodeURIComponent(merged_arr.join(concat));

    var composite_key = encodeURIComponent(consumer_secret) + concat;
    var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
    var signature = hash.toString(CryptoJS.enc.Base64);

    oauth["oauth_signature"] = signature;
    var auth_header =
      "OAuth " +
      Object.keys(oauth)
        .map(function(k) {
          return [k + '="' + oauth[k] + '"'];
        })
        .join(",");

    $.ajax({
      url: url + "?" + $.param(query),
      headers: {
        Authorization: auth_header,
        "X-Yahoo-App-Id": app_id,
        mode: "no-cors",
        //mode: "Access-Control-Allow-Headers",
        "Access-Control-Allow-Origin": "*"
      },
      method: "GET",
      success: function(data) {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log(data);
      },
      error: function(request, status, error) {
        console.log("error");
        console.log(error);
        //alert(request.responseText);
      }
    });
    /*
    console.log(url + API_KEY);
    axios
      .get(url + API_KEY)
      .then(response => {
        console.log("response is :");
        console.log(response);
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
      */
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
