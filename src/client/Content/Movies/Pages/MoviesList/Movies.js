import React, { Component } from 'react';
import MovieItem from './MovieItem';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.loading = (
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    );
    this.state = { renderingItem: this.loading };
    this.videoPage = this.props.videoPage;
  }

  componentWillMount() {
    this.getMoviesList();
  }

  getMoviesList() {
    fetch("http://192.168.1.165:8080/oneDriveList")
      .then((response) => {
        response.json()
          .then((jsonResp) => {
            const table = [];
            let i = 0;
            const allMovies = jsonResp;
            allMovies.forEach((movie) => {
              table.push(<MovieItem
                key={i}
                name={movie.title}
                year={allMovies[i].year}
                url={allMovies[i]}
                openVideo={this.videoPage}
              />);
              i += 1;
            });
            this.setState({ renderingItem: table });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="row">
        {this.state.renderingItem}
      </div>
    );
  }
}
export default Movies;
