/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';

class MenuItem extends PureComponent {
  render() {
    return (
      <div className="menuItem">
        <svg height="60" width="180" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="60" width="180" />
        </svg>
        <div class="text">{this.props.Text}</div>
      </div>
    );
  }
}

export default MenuItem;
