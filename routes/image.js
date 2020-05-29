var express = require('express');
var router = express.Router();

const ImageController = require('../controller/ImageController');

/* GET home page. */
router.get('/:student_id', ImageController.home);

module.exports = router;
