/* eslint-disable linebreak-style */
const OS = require('opensubtitles-api');
const settings = require('../OpenSub/settings.json');

class OpenSubtitlesConnector {
  constructor(imdbId) {
    this.openSubApi = new OS(settings);
    this.movieImdbId = imdbId;
  }

  getSubtitle() {
    return new Promise((resolve, reject) => {
      this.openSubApi.login()
        .then(() => {
          this.searchSubtitle().then((sub) => {
            fetch(sub.ro.vtt)
              .then(res => res.text())
              .then((subResp) => {
                resolve(subResp);
              }).catch((err) => {
                console.log(err);
                reject(err);
              });
          }).catch((err) => {
            reject(err);
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  searchSubtitle() {
    return new Promise((resolve, reject) => {
      this.openSubApi.search({
        sublanguageid: 'rum,eng',
        imdbid: this.movieImdbId,
        gzip: true
      }).then((subtitles) => {
        resolve(subtitles);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}

export default OpenSubtitlesConnector;
