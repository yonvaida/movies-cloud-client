/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import '../../Style/VideoPlayer.css';
import 'video-react/dist/video-react.css';
import { Player, ControlBar, ClosedCaptionButton } from 'video-react';



class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.src = props.src;
    this.id = props.id;
    this.playPauseVideo = this.playPauseVideo.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.changeProgress = this.changeProgress.bind(this);
    this.getVideoSource = this.getVideoSource.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
    this.state = { source: "" };
    this.player = {};
    this.progressBar = {};
  }


  componentDidMount() {
    const postBody = {
      id: this.id
    };
    const url = 'http://localhost:8080/oneDriveShareLink';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postBody)
    })
      .then(res => res.text())
      .then((response) => {
        console.log(response);
        this.setState({ source: response });
      });
  }

  changeProgress(event) {
    /*
    const x = event.pageX - this.progressBar.getBoundingClientRect().x;
    const progressValue = x * this.progressBar.max / this.progressBar.offsetWidth;
    this.progressBar.setAttribute('value', progressValue);
    this.player.currentTime = this.player.duration * progressValue / 100;*/
  }

  updateProgress() {
    /*const value = (100 / this.player.duration) * this.player.currentTime;
    this.progressBar.setAttribute('value', value);
    console.log(this.player.videoTracks);*/
  }

  playPauseVideo() {
    /*if (this.player.paused || this.player.ended) {
      this.player.play();
    } else {
      this.player.pause();
    }*/
  }

  fullScreen() {
    /*this.player.webkitEnterFullScreen();*/
  }

  getVideoSource() {
  }

  render() {
    console.log(this.src);
      
    return (
      <div>
         <Player
                crossOrigin="true"
                ref={(player) => { this.player = player; }}
              >
                <source
                  src={this.src}
                  type="video/mp4"
                />
                <ControlBar autoHide={true}>
                  <ClosedCaptionButton order={7} />
                </ControlBar>
              </Player>

      </div>
    );
  }
}

export default VideoPlayer;
