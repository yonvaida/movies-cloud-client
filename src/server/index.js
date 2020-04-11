import OneDriveConnector from './OneDrive/OneDriveConnector';
import OpenSubtitlesConnector from './OpenSub/OpenSubtitlesConnector';


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const connector = new OneDriveConnector();

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(cors());

app.get('/oneDriveList', (req, res) => {
  if (Date.now() > connector.tokenExpire) {
    connector.getToken().then(() => {
      connector.getMoviesList().then((successMessage) => {
        res.send(JSON.stringify(successMessage));
      });
    });
  } else {
    connector.getMoviesList().then((successMessage) => {
      res.send(JSON.stringify(successMessage));
    });
  }
});

app.post('/getMovieSubtitle', (req, res) => {
  const subConnector = new OpenSubtitlesConnector(req.body.imdbId);
  subConnector.getSubtitle().then((response) => {
    res.send(response);
  }).catch((err) => {
    res.send(err);
  });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
