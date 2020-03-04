/* eslint-disable linebreak-style */
const request = require('request');
const settings = require('../server/settings.json');
const ptt = require('parse-torrent-title');

class OneDriveConnector {
  constructor() {
    this.token = {};
    this.tokenRequestBody = {};
    this.token = {};
    this.tokenExpire = Date.now();
    this.moviesListRequest = {};
  }

  readTokenSettings() {
    const tokenRequestBody = settings.oneDrive.tokenParams;
    this.tokenRequestCallOptions = {
      uri: 'https://login.microsoftonline.com/f5afe32a-6883-4499-9eb0-c557c57cf316/oauth2/v2.0/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      form: tokenRequestBody
    };
  }

  readMoviesListSettings() {
    this.moviesListRequest = {
      uri: `https://graph.microsoft.com/v1.0/me/drive/items/${settings.oneDrive.drive_id}/children`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      }
    };
  }

  getToken() {
    this.readTokenSettings();
    return new Promise((resolve, reject) => {
      request(this.tokenRequestCallOptions, (error, response, body) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          this.token = JSON.parse(body).access_token;
          const expires = JSON.parse(body).expires_in;
          this.tokenExpire = Date.now() + expires * 1000;
          resolve('Success');
        }
      });
    });
  }

  getMoviesList() {
    this.readMoviesListSettings();
    return new Promise((resolve,reject) => {
      request(this.moviesListRequest, (error, response, body) => {
        if(error){
          console.log(error);
          reject(error);
        } else {
          let allMovies = [];
          JSON.parse(body).value.forEach((movie) => {
            let movieinfo = ptt.parse(movie.name);
            movieinfo.webUrl = movie.webUrl;
            allMovies.push(movieinfo);
          });
        resolve(allMovies);
        }
      });
    });
  }
}
export default OneDriveConnector;
