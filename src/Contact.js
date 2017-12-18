import React, { Component } from "react";

const contact = () => {
  return (
    <form action="/users" method="post">
      <div class="form-group">
        <input
          type="text"
          id="name"
          name="name"
          class="form-control"
          placeholder="your name"
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          id="phone"
          name="phone"
          class="form-control"
          placeholder="your phone"
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          id="email"
          name="email"
          class="form-control"
          placeholder="your email address"
        />
      </div>

      <div class="form-group">
        <input
          type="textarea"
          id="message"
          name="message"
          class="form-control"
          placeholder="your message"
        />
      </div>

      <div class="form-group">
        <input type="submit" class="btn btn-primary" />
      </div>
    </form>
  );
};

export default contact;
