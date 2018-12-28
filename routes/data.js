var express = require('express');
var router = express.Router();
var dataController = require('../controllers/dataController');

/* GET users listing. */
router.get('/getAllData', dataController.getAllData);

router.post('/getFilteredData', dataController.getFilteredData);

router.get('/getDistinctSeasons', dataController.getDistinctSeasons);
router.get('/getDistinctEpisodes', dataController.getDistinctEpisodes);
router.get('/getDistinctAmount', dataController.getDistinctAmount);




module.exports = router;
