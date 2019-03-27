import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
