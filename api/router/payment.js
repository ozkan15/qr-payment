
const express = require('express');
const request = require('request');

const batchController = require('../controllers/batchController');
const refundController = require('../controllers/refundController');
const transactionController = require('../controllers/transactionController');
const saleController = require('../controllers/saleController');

const router = express.Router();


router.post('/sale', saleController.sale, batchController.batch_close, transactionController.transaction, batchController.batch_summary);
router.post('/refund', refundController.refund, batchController.batch_close, transactionController.transaction, batchController.batch_summary);

module.exports = router;
