/* eslint-disable linebreak-style */
import React, { Component } from "react";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = { moviePoster: '' };
    this.state = { movieInfo: '' };
    this.state = { Loading: '' };
    this.movieName = this.props.name;
  }

  componentDidMount() {
    this.setState({ Loading: true });
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d1fc9204681d5ddcfd54780924dca3ff&query=
                ${encodeURIComponent(this.props.name)}&year=${this.props.year}`;
    fetch(url)
      .then(res => res.text())
      .then((res) => {
        const imagePath = `http://image.tmdb.org/t/p/original/${  JSON.parse(res).results[0].poster_path}`;
        this.setState({ movieInfo: res });
        this.setState({ moviePoster: <img alt="" className="movie_poster" src={imagePath} /> });
        this.setState({ Loading: false });

      });
  }

  render() {
    const openVideo = this.props.openVideo;

    if (this.state.Loading) {
      return (
        <div
          className="movie"
        >
          LOADING...
        </div>
      );
    }
    return (
      <div
        className="movie"
        onClick={() => openVideo(this.props.url, this.state.movieInfo)} onKeyPress={this.handleKeyPress}
        role="button"
        tabIndex={0}
      >
      {this.state.moviePoster} 
      </div>
    );
  }
}

export default MovieItem;
