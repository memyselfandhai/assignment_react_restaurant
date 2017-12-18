import React, { Component } from "react";

const nav = () => {
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            hai.restaurant.io
          </a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="#">Welcome</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Conact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default nav;
