const express = require('express');
const exampleController = require('../controllers/exampleController');

const router = express.Router();
router.get('/hello', exampleController.getHello);
router.get('/items', exampleController.getItems);

module.exports = router;
