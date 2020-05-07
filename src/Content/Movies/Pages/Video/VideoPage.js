/* eslint-disable linebreak-style */
import React from 'react';
import 'video-react/dist/video-react.css';
import { Player, ControlBar, ClosedCaptionButton } from 'video-react';

const settings = require('../../../../settings.json');

class VideoPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { video: 'iframe' };
    this.state = { moviePoster: '' };
    this.state = { source: "" };
    this.getMovieSubtitle = this.getMovieSubtitle.bind(this);
    this.loadVideo = this.loadVideo.bind(this);
    this.videoLoaded = false;
    this.player = {};
    this.subtitle = '';
  }

  componentDidMount() {
    this.setState({
      renderOutput: (
        <div> 
          <div className="lds-ripple">
            <div />
            <div />
          </div>
        </div>
      )
    });
    const postBody = {
      id: this.props.url.id
    };
    const hidden = {
      display: 'none'
    };
    const url = `${settings.apiServer}/oneDriveShareLink`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody)
    })
      .then(res => res.text())
      .then((response) => {
        this.setState({
          iframe: (<iframe 
            title="helper" 
            style={hidden} 
            src={response} 
            onLoad={this.loadVideo.bind(this)} 
          />)
        });
        setTimeout(() => { this.loadVideo(); }, 10000);
      });
  }

  getMovieSubtitle() {
    const id = JSON.parse(this.props.info).imdb_id;
    const postBody = {
      imdbId: id
    };
    const url = `${settings.apiServer}/getMovieSubtitle`;
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
        videoPlayer[0].setAttribute('crossOrigin', 'true');
        subs.forEach((element) => {
          const track = document.createElement('track');
          videoPlayer[0].appendChild(track);
          i += 1;
          track.label = `Sub ${i}`;
          track.src = element;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loadVideo() {
    if (this.videoLoaded) {
      return;
    }
    this.videoLoaded = true;
    this.getMovieSubtitle();
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
    this.setState({
      renderOutput: (
      <div>
        <div className="pageBackground" style={backgroundStyle} />
        <div className="backgroundMask" />
        <div className="container-fluid d-flex">
          <div className="row">
            <div className="col-sm-6 player">
              <Player
                ref={(player) => { this.player = player; }}
              >
                <source
                  src={movieUrl}
                  type="video/mp4"
                />
                <ControlBar autoHide={true}>
                  <ClosedCaptionButton order={7} />
                </ControlBar>
              </Player>
            </div>
            <div className="col-sm-6">
              <div className="movieTitle">{this.props.url.title}</div>
              <div className="movieDescription">{movieInfo.overview}</div>
            </div>
          </div>
        </div>
      </div>)
    });
  }

  render() {
    return (
      <div>
        {this.state.renderOutput}
        {this.state.iframe}
      </div>
    );
  }
}

export default VideoPage;
