/* eslint-disable linebreak-style */
import React, { Component } from 'react';

class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { video:"Loading" };
    this.state = { moviePoster: '' };
  }

  render() {
    const movieUrl = this.props.url.webUrl;
    const movieInfo = JSON.parse(this.props.info).results[0];
    console.log(movieInfo);
    const backgroundStyle = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(http://image.tmdb.org/t/p/original/${movieInfo.backdrop_path})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };
    return (
        <div className="pageBackground" style={backgroundStyle}>
          <div className="backgroundMask">
            <div className="movieTitle">{this.props.url.title}</div>
            <div className="movieDescription">{movieInfo.overview}</div>
            <video className="player" controls>
              <source src={movieUrl} type="video/mp4"/>
              <track></track>
            </video>
          </div>
        </div>
    );
  }
}

export default Video;
