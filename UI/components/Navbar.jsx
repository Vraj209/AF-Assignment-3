import React from "react";


export default class Navbar extends React.Component {
  render() {
    const navStyle = {
      backgroundColor: "lightgreen",
      color: "white",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between", // Align EMS to the left, links to the right
      alignItems: "center",
    };

    const startContainerStyle = {
      display: "flex",
      alignItems: "center",
    };

    const h2Style = {
      margin: "0",
    };

    const ulStyle = {
      listStyle: "none",
      display: "flex",
    };

    const liStyle = {
      marginRight: "15px",
    };

    const linkStyle = {
      textDecoration: "none",
      color: "white",
    };

    const hoverStyle = {
      color: "darkgreen",
      borderBottom: "2px solid darkgreen",
    };

    return (
      <nav style={navStyle}>
        <div className="start-container" style={startContainerStyle}>
          <h2 style={h2Style}>EMS</h2>
        </div>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a
              href="/directory"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style = hoverStyle)}
              onMouseOut={(e) => (e.target.style = {})}
            >
              Employee Directory
            </a>
          </li>
          <li style={liStyle}>
            <a
              href="/empCreate"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style = hoverStyle)}
              onMouseOut={(e) => (e.target.style = {})}
            >
              Employee Create
            </a>
          </li>
          <li style={liStyle}>
            <a
              href="/upcomingretirement"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style = hoverStyle)}
              onMouseOut={(e) => (e.target.style = {})}
            >
              UpComing Retirement
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
