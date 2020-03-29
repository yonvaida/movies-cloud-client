/* eslint-disable linebreak-style */
import React from 'react';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';


class Video extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { video: 'Loading' };
    this.state = { moviePoster: '' };
    this.getMovieSubtitle = this.getMovieSubtitle.bind(this);
    this.sub = '';
    this.subUrl = '';
  }

  getMovieSubtitle() {
    const id = JSON.parse(this.props.info).imdb_id;
    const postBody = {
      imdbId: id
    };
    const url = 'http://192.168.1.165:8080/getMovieSubtitle';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody)
    })
      .then(res => res.text())
      .then((data) => {
        console.log(data);
        this.sub = data;
        this.setState({ video: 'Render' });
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
    if (this.state.video !== 'Render') {
      this.getMovieSubtitle();
      return (
        <div>
          "Loading"
        </div>
      );
    }
    console.log(this.sub);
    return (
      <div>
        <div className="pageBackground" style={backgroundStyle} />
        <div className="backgroundMask" />
        <div className="container-fluid d-flex">
          <div className="row">
            <div className="col-sm-6 player">
              <Player>
                <source
                  src={movieUrl}
                  type="video/mp4"
                />
                <track
                  src={this.sub}
                  default
                />
              </Player>
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

export default Video;
