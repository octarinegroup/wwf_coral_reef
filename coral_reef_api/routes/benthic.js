var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET benthic listing. */
router.get('/', function(req, res, next) {
  db.benthic.findAll()
  .then(benthicData => {
    res.status(200).send({
      sucess: true,
      message: 'Loaded benthic data',
      data: {
        'data': benthicData
      }
    })
  })
  .catch(err => {
    res.status(500).send({
      success: false,
      message: 'Error',
      err
    })
  })
});

module.exports = router;
