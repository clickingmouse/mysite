import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
//import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Landing />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
