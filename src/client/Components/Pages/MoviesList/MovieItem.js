import React, { Component } from "react";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = { movieinfo: '' };
    this.movieName = this.props.name;
    this.openVideo = this.props.openVideo;
  }

  componentDidMount() {
    this.setState({ movieinfo: "Loading movie" });
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d1fc9204681d5ddcfd54780924dca3ff&query=
                ${encodeURIComponent(this.props.name)}&year=${this.props.year}`;
    const response = fetch(url)
            .then(res => res.text()).
            then(res => {
                let imagePath = 'http://image.tmdb.org/t/p/original/' + JSON.parse(res).results[0].poster_path;
                this.setState({ movieinfo: <img className="movie_poster" src={imagePath} /> });
            })
    }

    clicked(url) {
        window.open(url)
    }

    render() {
        let openVideo = this.props.openVideo;
        return (
          <div className="movie"
                onClick={() => openVideo(this.props.url)}>
              {this.state.movieinfo}
            </div>
        )
    }
}

export default MovieItem;