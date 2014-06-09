var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:username', function(req, res) {
  res.send('respond with a resource'+req.params.username);
});
module.exports = router;
