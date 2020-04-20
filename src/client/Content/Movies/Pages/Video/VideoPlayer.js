/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import '../../Style/VideoPlayer.css';
const axios = require('axios');
import VideoPartSource from './VideoPartSource'
//import 'react-hls/src/styles/index.scss'; // need to import basic styles


class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.src = props.src;
    this.playPauseVideo = this.playPauseVideo.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.changeProgress = this.changeProgress.bind(this);
    //this.createCORSRequest = this.createCORSRequest.bind(this);
    this.getVideoSource = this.getVideoSource.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
    this.state = { source: "" };
    this.player = {};
    this.progressBar = {};
  }


  componentDidMount() {
    this.player.addEventListener('timeupdate', this.updateProgress, false);
    this.progressBar.addEventListener('click', this.changeProgress);
  }

  changeProgress(event) {
    const x = event.pageX - this.progressBar.getBoundingClientRect().x;
    const progressValue = x * this.progressBar.max / this.progressBar.offsetWidth;
    this.progressBar.setAttribute('value', progressValue);
    this.player.currentTime = this.player.duration * progressValue / 100;
  }

  updateProgress() {
    const value = (100 / this.player.duration) * this.player.currentTime;
    this.progressBar.setAttribute('value', value);
  }

  playPauseVideo() {
    if (this.player.paused || this.player.ended) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  fullScreen() {
    this.player.webkitEnterFullScreen();
  }


  getVideoSource() {  
    const reqHeaders = {
      //'Connection': 'keep-alive',
      //'Sec-Fetch-Dest': 'empty',
      //'Origin': 'http://localhost:3000',
      //'Sec-Fetch-Site': 'cross-site',
      //'Sec-Fetch-Mode': 'cors',
      //'Referer': 'http://localhost:3000/',
      //'Accept-Encoding': 'gzip, deflate, br',
      //'Accept-Language': 'en-US,en;q=0.9,de;q=0.8,it;q=0.7,ro;q=0.6',
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Headers': 'authorization, content-type, range',
      "Cache-Control": "max-age=604800",
      "If-Range": "{273C5F83-FC93-4689-9BEF-852CF60691BE},5",
      //"Sec-Fetch-Site": "cross-site",
      //"Sec-Fetch-Mode": "cors",
      Range: 'bytes=0-1000'
    }

    axios.get(this.src, {
      headers: reqHeaders
    }).then((response) => {
      console.log(response);
    });
  /*  var myHeaders = new Headers();
    myHeaders.append('Access-Control-Request-Method', 'GET');
    myHeaders.append('Access-Control-Request-Headers', 'SPRequestGuid, X-MoveState, Timing-Allow-Origin, SPRequestDuration, spclientservicerequestduration, Content-Length');
    myHeaders.append('Access-Control-Request-Method', 'http://localhost:3000');
    //myHeaders.append('Content-Type', 'video/mp4');
    //myHeaders.append("Range", "bytes=0-1000");
    
    var requestOptions = {
      method: 'OPTIONS',
      headers: myHeaders,
      redirect: 'follow',
      mode:'cors'
    };
    
    fetch(this.src, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));*/
  }

  render() {
    this.getVideoSource();
    console.log(this.src);
    const sor = this.src;
    return (
      <div>
        <video 
          id="videoContainer"
          crossOrigin="anonymous"
          autoPlay
          ref={(player) => { this.player = player; }}
          preload="none"
        >
          <source
            
            type="video/mp4"
          />
        </video>
        <div id="video-controls" className="controls" data-state="hidden">
          <button id="playpause" type="button" data-state="play" onClick={this.playPauseVideo} />
          <button id="stop" type="button" data-state="stop" />
          <progress
            ref={(progressBar) => { this.progressBar = progressBar; }}
            value="0"
            max="100"
          />
          <button id="fs" type="button" onClick={this.fullScreen} />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
