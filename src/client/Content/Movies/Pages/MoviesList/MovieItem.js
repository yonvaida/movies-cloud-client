/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { Component } from "react";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = { moviePoster: '' };
    this.state = { movieInfo: '' };
    this.state = { movieTitle: ''};
    this.state = { movieGenere: ''};
    this.state = { Loading: '' };
    this.movieName = this.props.name;
    this.getMovieFullInfo = this.getMovieFullInfo.bind(this);
  }

  componentDidMount() {
    this.setState({ Loading: true });
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d1fc9204681d5ddcfd54780924dca3ff&query=
                ${encodeURIComponent(this.props.name)}&year=${this.props.year}`;
    fetch(url)
      .then(res => res.text())
      .then((res) => {
        const movieId = JSON.parse(res).results[0].id;
        this.getMovieFullInfo(movieId);
      }).catch((err) => {
        console.log(err);
      });
  }

  getMovieFullInfo(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=d1fc9204681d5ddcfd54780924dca3ff`;
    fetch(url)
      .then(res => res.text())
      .then((res) => {
        const imagePath = `http://image.tmdb.org/t/p/w300${JSON.parse(res).poster_path}`;
        this.setState({ movieInfo: res });
        this.setState({ moviePoster: <img alt="" src={imagePath} /> });
        this.setState({ Loading: false });
        this.setState({ movieTitle: JSON.parse(res).original_title });
      });
  }

  render() {
    const openVideo = this.props.openVideo;
    if (this.state.Loading) {
      return (
        <div
          className="movie-item"
        >
          LOADING...
        </div>
      );
    }
    return (
      <div
        className="movie-item"
        tabIndex={0}
      >
        <div className="movie_poster">
          {this.state.moviePoster}
          <div className="item-rated" />
          <div className="item-play" 
            role="button"
            onClick={() => openVideo(this.props.url, this.state.movieInfo)}
            onKeyPress={this.handleKeyPress}
            tabIndex={-1}
          >
            <i className="fa fa-play"></i>
          </div>
          <div className="item-mask" />
        </div>
        <div className="movie-item-title">
          <h3><a>{this.state.movieTitle}</a></h3>
          <span className="movie-category">Comedy</span>
        </div>
      </div>
    );
  }
}

export default MovieItem;
