import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Content from "./Content.jsx";
import Navbar from "./Navbar.jsx";

class Page extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default Page;
