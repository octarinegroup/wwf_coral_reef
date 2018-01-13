var express = require('express');
var router = express.Router();

/* GET fish listing. */
router.get('/', function(req, res, next) {
  res.status(200).send({
    sucess: true,
    message: 'Loaded fish data',
    data: {
      'data': 'Fish'
    }
  })
});

module.exports = router;
