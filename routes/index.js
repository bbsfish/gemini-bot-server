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

  const prompt = `以下のメールを要約して\n
    送信者: ${body.from}\n
    概要: ${body.subject}\n
    本文: ${body.body}
    `;
  
  const summary = await gemini.run(prompt);
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const data = JSON.stringify({
    content: {
      from: body.from,
      subject: body.subject,
      body: summary
    }
  });
  
  const request = https.request(process.env.LINE_BOT_URL, options);
  request.write(data);
  request.end();


  res.end();
}

module.exports = router;
