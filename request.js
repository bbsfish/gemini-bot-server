const https = require('https');
const request = require('request');
const url = 'https://script.google.com/macros/s/AKfycbxPBl6lgCrs2PHNhQEcJkFSz0A0R-reH-m1exfXYHCZd30jy9shoBFz5-gxvIMK_Xk6/exec';
// const url = 'https://script.google.com/macros/s/AKfycbyTfQ6UcgG2itxBgyROVrzu4rZ6K0GM45zgYrrwAYA/dev';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
}
const data = JSON.stringify({
  msg: 'hello!'
});

const req = https.request(url, options);
req.write(data);
req.end();