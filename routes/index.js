const express = require('express');
const https = require('https');
const router = express.Router();

const gemini = require('../apis/gemini-ai.js');

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.post('/', webhook);

async function webhook(req, res) {
  const body = req.body; // <= {from: '***', subject: '', body: ''}
  console.log(body);
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const data = JSON.stringify({
    content: body
  });
  
  const request = https.request(url, options);
  request.write(data);
  request.end();


  res.end();
}

module.exports = router;
