/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import MenuItem from './Components/MenuItem';

import './Style/menu.css';

class MainMenu extends PureComponent {

  render() {
    return (
      <div>
        <h1>Menu</h1>
        <MenuItem Text="MOVIES" />
        <MenuItem Text="TV SHOWS" />
        <MenuItem Text="MUSIC" />
      </div>
    );
  }
}

export default MainMenu;
