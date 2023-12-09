import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Page from "./Page.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Page />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("contents"));
