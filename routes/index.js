const express = require('express');
const router = express.Router();

const gemini = require('../apis/gemini-ai.js');

/* GET home page. */
const GAS_URL = 'https://script.google.com/macros/s/AKfycbxPBl6lgCrs2PHNhQEcJkFSz0A0R-reH-m1exfXYHCZd30jy9shoBFz5-gxvIMK_Xk6/exec';
router.post('/', async (req, res) => {
  const data = req.body; // <= {from: '***', subject: '', body: ''}
  console.log(data);
  const response = await fetch(GAS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const result = await res.json();
    console.log(result);
  }


  res.end();
});

module.exports = router;
