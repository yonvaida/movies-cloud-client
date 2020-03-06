import React, { Component } from 'react';
import MovieItem from './MovieItem';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { renderingItem: 'Loading movies list'};
    this.videoPage = this.props.videoPage;
  }

  componentWillMount() {
    console.log(this.getMoviesList());
  }

  getMoviesList() {
    fetch("http://localhost:8080/oneDriveList")
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
      .then((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.renderingItem}
      </div>
    );
  }
}
export default Movies;
