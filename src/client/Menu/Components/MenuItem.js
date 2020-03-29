/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
//import MoviePage from '../../Movies/MoviePage';
//import MusicPage from '../../Music/MusicPage';
import ReactDOM from 'react-dom';


class MenuItem extends PureComponent {
  constructor(props) {
    super(props);
    this.Text = this.props.Text;
  }

  changePage() {
    /*console.log(this.Text);
    if (this.Text === 'MOVIES') {
      ReactDOM.render(<MoviePage />, document.getElementById('mainPage'));
    } else {
      ReactDOM.render(<MusicPage />, document.getElementById('mainPage'));
    }*/
  }

  render() {
    return (
      <div className="menuItem" onClick={()=>this.changePage(this)}>
        <div className="text">
          <span>{this.props.Text}
            <i class="fa fa-film menu-item-icon"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default MenuItem;
