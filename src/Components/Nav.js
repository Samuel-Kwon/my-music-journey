import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

export class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-text">
          <Link to="/view">View</Link>
          <Link to="/upload">Upload</Link>
        </div>
      </div>
    );
  }
}
