import React, { Component } from "react";

const Item = ({ title }) => {
  const link = "#" + title.toLowerCase();
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
};

const MenuItems = ({ items }) => {
  return (
    <ul className="nav navbar-nav">
      {items.map(item => <Item title={item} />)}
    </ul>
  );
};

const Menu = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            hai.restaurant.io
          </a>
          <MenuItems items={["Home", "Menu", "Reservation", "Contact"]} />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
