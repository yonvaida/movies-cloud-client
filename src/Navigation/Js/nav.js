/* eslint-disable linebreak-style */
import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';
import '../Style/nav.css';
import { NavLink } from 'react-router-dom';

class Navigation extends PureComponent {
  render() {
    return (
      <nav id="mainNav" className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/">Movies Cloud</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" to="/Movies" activeClassName="active">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" to="/TvShows" activeClassName="active">Tv Shows</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" to="/Music" activeClassName="active">Music</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
