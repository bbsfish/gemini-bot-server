const express = require('express');
const router = express.Router();

const gemini = require('../apis/gemini-ai.js');

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.post('/', webhook);

async function webhook(req, res) {
  const data = req.body; // <= {from: '***', subject: '', body: ''}
  console.log(data);
  
  const response = await fetch(process.env.LINE_BOT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    // const result = await res.json();
    console.log('ok!');
  } else {
    console.log('error!');
  }


  res.end();
}

module.exports = router;
