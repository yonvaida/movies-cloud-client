/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import MoviePage from '../../Movies/MoviePage';
import MusicPage from '../../Music/MusicPage';
import ReactDOM from 'react-dom';


class MenuItem extends PureComponent {
  constructor(props) {
    super(props);
    this.Text = this.props.Text;
  }

  changePage() {
    console.log(this.Text);
    if (this.Text === 'MOVIES') {
      ReactDOM.render(<MoviePage />, document.getElementById('mainPage'));
    } else {
      ReactDOM.render(<MusicPage />, document.getElementById('mainPage'));
    }
  }

  render() {
    return (
      <div className="menuItem" onClick={()=>this.changePage(this)}>
        <svg height="60" width="180" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="180" />
        </svg>
        <div className="text">{this.props.Text}</div>
      </div>
    );
  }
}

export default MenuItem;
