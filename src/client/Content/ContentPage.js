/* eslint-disable linebreak-style */
import React, { PureComponent } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Navigation from '../Navigation/Js/nav';
import MoviePage from './Movies/MoviePage';

class ContentPage extends PureComponent {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Switch>
          <Route exact path="/Movies">
            <MoviePage />
          </Route>
          <Route path="/TvShows">
            <div>2</div>
          </Route>
          <Route path="/Music">
            <div>3</div>
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}
export default ContentPage;
