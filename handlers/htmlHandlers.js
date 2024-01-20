const path = require('path');

const htmlHandlers = {
  getHtml1: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'pages', 'html1.html'));
  },
  
  getHtml2: (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'assets', 'pages', 'html2.html'));
  },
};

module.exports = htmlHandlers;
