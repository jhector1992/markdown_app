import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"># Mrk</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/markdown">Markdowns</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/topics">Topics</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;