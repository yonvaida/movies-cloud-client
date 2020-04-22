import React, { Component } from 'react';
import './Style/App.css';
import './Style/vim.css';

import ApiConnector from '../../Connector/ApiConnector'
import Movies from './Pages/MoviesList/Movies';
import VideoPage from './Pages/Video/VideoPage';

class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "" };
    this.state = { loading: true};
    this.connector = new ApiConnector;
    this.videoPage = this.videoPage.bind(this);
  }

  componentWillMount() {
    this.setState({ page: <Movies videoPage={this.videoPage} /> });
  }

  videoPage(url, info) {
    this.setState({ page: <VideoPage url={url} info={info} /> });
  }

  render() {
    const backgroundStyle = {
      width: "100%",
      height: "100vh",
      color: "white"
    };
    return (
      <div style={backgroundStyle}>
        {this.state.page}
      </div>
    );
  }
}

export default MoviePage;
