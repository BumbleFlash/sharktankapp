var express = require('express');
var router = express.Router();
var dataController = require('../controllers/dataController');

/* GET users listing. */
router.get('/getAllData', dataController.getAllData);

router.post('/getFilteredData', dataController.getFilteredData);



module.exports = router;
