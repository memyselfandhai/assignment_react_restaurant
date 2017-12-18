import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Nav";
import Header from "./Header";
import Welcome from "./Welcome";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Welcome />
        <Contact />
      </div>
    );
  }
}

export default App;
