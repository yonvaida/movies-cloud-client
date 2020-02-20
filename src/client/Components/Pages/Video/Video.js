import React, { Component } from "react";
import Plyr from 'plyr'

class Video extends Component {
    render() {
        return (
            <div>
               <video controls><source src={this.props.url} type="video/mp4"/></video>
            </div>
        )
    }
}

export default Video;