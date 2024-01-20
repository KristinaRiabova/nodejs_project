const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const htmlHandlers = require('./handlers/htmlHandlers');
const dataHandlers = require('./handlers/dataHandlers');
const infoHandler = require('./handlers/infoHandler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const whitelist = ['http://localhost:8080'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.get('/html1', htmlHandlers.getHtml1);
app.get('/html2', htmlHandlers.getHtml2);

app.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'assets', 'images', filename);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Image not found');
  }
});

app.get('/audio/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'assets', 'audio', filename);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Audio file not found');
  }
});

app.get('/file/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'assets', 'pages', `${filename}.html`);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('File not found');
  }
});

app.get('/objects', dataHandlers.getAllObjects);
app.get('/objects/:type', dataHandlers.getObjectsByType);
app.get('/objects/:type/:id', dataHandlers.getObjectById);

app.get('/info', infoHandler.getInfo);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

