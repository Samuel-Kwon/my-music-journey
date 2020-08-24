import React from "react";
import "../css/nav.css";

export class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-text">
          <a href="/my-music-joureny/#/view">View</a>
          <a href="/my-music-joureny/#/upload">Upload</a>
        </div>
      </div>
    );
  }
}
