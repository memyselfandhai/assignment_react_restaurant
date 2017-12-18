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
import NumberPeople from "./NumberPeople";
import TimePicker from "./TimePicker";
import MenuPicker from "./FoodMenu";
import Location from "./map.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Welcome />
        <Contact />
        <h2 id="reservation">Reservation</h2>
        <MuiThemeProvider>
          <h3>
            Choose Date: <DatePicker />
          </h3>
          <h3>
            Choose Time: <TimePicker />
          </h3>
          <h3>
            Choose Number of People: <NumberPeople />
          </h3>
          <h2 id="menu">Menu</h2>
          <MenuPicker />
        </MuiThemeProvider>
        <Location />
      </div>
    );
  }
}

export default App;
