import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Nav";
import Header from "./Header";
import Welcome from "./Welcome";
import Contact from "./Contact";
import DatePicker from "./DatePicker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Welcome />
        <Contact />
        <h2>Reservation</h2>
        <MuiThemeProvider>
          <DatePicker />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
