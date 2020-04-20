/* eslint-disable linebreak-style */
import React from 'react';
import VideoPlayer from './VideoPlayer'

class VideoPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { video: 'Loading' };
    this.state = { moviePoster: '' };
    this.getMovieSubtitle = this.getMovieSubtitle.bind(this);
    this.player = {};
    this.subtitle = '';
  }

  getMovieSubtitle() {
    const id = JSON.parse(this.props.info).imdb_id;
    const postBody = {
      imdbId: id
    };
    const url = 'http://localhost:8080/getMovieSubtitle';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody)
    })
      .then(res => res.text())
      .then((data) => {
        const subs = JSON.parse(data);
        const videoPlayer = document.getElementsByTagName('video');
        let i = 0;
        subs.forEach((element) => {
          const track = document.createElement('track');
          videoPlayer[0].appendChild(track);
          i += 1;
          console.log(i);
          track.label = `Sub ${i}`;
          track.src = element;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const movieUrl = this.props.url.webUrl;
    const movieInfo = JSON.parse(this.props.info);
    const movieImagePath = `http://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`;
    const backgroundStyle = {
      position:"absolute",
      zIndex:"-2",
      width: '100%',
      height: '100%',
      backgroundImage: `url(${movieImagePath})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };
    this.getMovieSubtitle();

    return (
      <div>
        <div className="pageBackground" style={backgroundStyle} />
        <div className="backgroundMask" />
        <div className="container-fluid d-flex">
          <div className="row">
            <div className="col-sm-6 player">
              <VideoPlayer
                src={movieUrl}
              />
            </div>
            <div className="col-sm-6">
              <div className="movieTitle">{this.props.url.title}</div>
              <div className="movieDescription">{movieInfo.overview}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPage;
