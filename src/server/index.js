import OneDriveConnector from './OneDriveConnector';

const express = require('express');
const cors = require('cors');

const app = express();

const connector = new OneDriveConnector();

app.use(express.static('dist'));
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

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
