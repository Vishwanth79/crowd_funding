const express = require('express');
const path = require('path');
const app = express();
let router = express.Router();

router.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, '/public/home.html'));
});

router.get('/fund-rising.html', (req, res) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, '/public/fund-riser.html'));
});

router.get('/donate.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/donate.html'));
});

router.get('/sig.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/sig.html'));
});

router.get('/public/okok.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/okok.html'));
});

let port = 3000;
app.use('/', router);
app.listen(3000, (req, res) => {
  console.log(`server is running on port ${port}`);
});
