const express = require('express');
const path = require('path');
const https = require('https');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/web-client/ch62/color.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/script.js'));
});

router.get('/web-client/ch62/color1.js', (req, res) => {
  https.get(`https://asdgdfboa.requestcatcher.com/test?q=${req.query.q}`)
});

module.exports = router;
