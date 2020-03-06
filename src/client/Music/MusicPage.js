/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import './Style/MusicPageStyle.css';

class MusicPage extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "" };
    this.state = { loading:true};

    this.videoPage = this.videoPage.bind(this);
  }

  componentWillMount() {
    this.setState({ page: <div className="MusicList" /> });
  }

  videoPage(url, info) {
    this.setState({ page: <Video url={url} info={info} /> });
  }

  render() {
    const backgroundStyle = {
      width: "100%",
      height: "100%"
    };
    return (
      <div style={backgroundStyle}>
        {this.state.page}
      </div>
    );
  }
}

export default MusicPage;
