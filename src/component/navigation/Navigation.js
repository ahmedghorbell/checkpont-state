import React, { Component } from "react";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="About me">About me</a>
            </li>
            <li>
              <a href="Services">Services</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
