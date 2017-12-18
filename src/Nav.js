import React, { Component } from "react";

const Item = ({ title }) => {
  return (
    <li>
      <a href="#">{title}</a>
    </li>
  );
};

const MenuItems = ({ items }) => {
  console.log(items);
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
          <MenuItems items={["Home", "Menu", "Contact"]} />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
