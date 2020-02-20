import React, { Component } from 'react';

class MovieInfo extends Component {
  componentWillMount() {
    fetch('http://localhost:8080/oneList')
      .then(res => res.text())
      .then((res) => {
        this.setState({ apiResponse: JSON.parse(res) })
      });
  }

  render() {
    return (
      <div className="movie">{this.props.apiResponse}</div>
    );
  }
}

export default MovieInfo;
