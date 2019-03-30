import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Header from "./components/layout/Header";
import WeatherForecast from "./components/weather/WeatherForeacast";
import { BrowserRouter } from "react-router-dom";
import Rooms from "./components/layout/Rooms";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Header />
          <WeatherForecast />
          <Rooms />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
