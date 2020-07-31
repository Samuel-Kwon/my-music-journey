import React from 'react';
import '../css/nav.css';

export class Nav extends React.Component {
  render() {
    return (      
      <div className="nav">
          <div className="nav-text">
            <a>View</a>
            <a>Upload</a>
          </div>
      </div>
    );
  }
}