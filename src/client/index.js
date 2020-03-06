import React from 'react';
import ReactDOM from 'react-dom';
import MoviePage from './Movies/MoviePage';
import MainMenu from './Menu/MainMenu';

ReactDOM.render(<MoviePage />, document.getElementById('mainPage'));
ReactDOM.render(<MainMenu />, document.getElementById('menu'));
