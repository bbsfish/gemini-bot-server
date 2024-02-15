const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', (req, res) => {
  console.log(req.body);
  res.end();
});

module.exports = router;
