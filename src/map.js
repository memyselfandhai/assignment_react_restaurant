import React, { Component } from "react";

const Location = () => {
  let google = process.env.googleKEY;
  return (
    <div>
      <iframe
        width="600"
        height="450"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?q=pho%20king%20restaurant&key={google}"
        allowfullscreen
      />
    </div>
  );
};

export default Location;
