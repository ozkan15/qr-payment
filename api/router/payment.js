
const express = require('express');
const request = require('request');

const batchController = require('../controllers/batchController');
const refundController = require('../controllers/refundController');
const transactionController = require('../controllers/transactionController');
const saleController = require('../controllers/saleController');

const router = express.Router();


router.post('/sale', saleController.sale);
router.post('/transaction', transactionController.transaction);
router.get('/batch_close', batchController.batch_close);
router.get('/batch_summary', batchController.batch_summary);
router.use('/refund', refundController.get_refund);

module.exports = router;
