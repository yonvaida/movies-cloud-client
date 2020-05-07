import React, { Component } from 'react';
import MovieItem from './MovieItem';
import { element } from 'prop-types';

const settings = require('../../../../settings.json');

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
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.selectedItem = 0;
  }

  componentWillMount() {
    this.getMoviesList();
    document.addEventListener('keydown', this.handleKeyPress);
  }

  getMoviesList() {
    fetch(`${settings.apiServer}/allMovies`)
      .then((response) => {
        response.json()
          .then((jsonResp) => {
            const table = [];
            let i = 0;
            const allMovies = jsonResp;
            allMovies.forEach((movie) => {
              table.push(<MovieItem
                key={i}
                id={i}
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

  handleKeyPress(event) {
    const elements = document.getElementsByClassName('movie-item');
    const focusedElement = document.getElementsByClassName('focused');
    if (event.keyCode === 39
      && focusedElement.length !== 0
      && this.selectedItem !== elements.length - 1) {
      this.selectedItem += 1;
    }

    if (event.keyCode === 37
      && focusedElement.length !== 0 
      && this.selectedItem !== 0) {
      this.selectedItem -= 1;
    }

    if (event.keyCode === 13
      && focusedElement.length !== 0) {
      focusedElement[0].click();
    }
    if (focusedElement.length !== 0) {
      focusedElement[0].classList.remove('focused');
    }
    elements[this.selectedItem].classList.add('focused');
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        {this.state.renderingItem}
      </div>
    );
  }
}
export default Movies;
