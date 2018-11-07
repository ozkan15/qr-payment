
const express = require('express');
const request = require('request');

const router = express.Router();





router.post('/',(req, res, next) => {

  var options = { method: 'POST',
  url: 'https://sandbox-api.payosy.com/api/payment',
  headers:
   { accept: 'application/json',
     'content-type': 'application/json',
     'x-ibm-client-secret': 'Y6pR1pW4yG7eF0fQ1cS7tH8oK5yQ6tH3aW0oI6rN4kH2sS4iR4',
     'x-ibm-client-id': '42776325-d649-4ed2-83a4-8e66c796a2aa' },
  body:
   { returnCode: 1000,
     returnDesc: 'success',
     receiptMsgCustomer: 'beko Campaign',
     receiptMsgMerchant: 'beko Campaign Merchant',
     paymentInfoList:
      [ { paymentProcessorID: 67,
          paymentActionList: [ { paymentType: 3, amount: 100, currencyID: 949, vatRate: 800 } ] } ],
     QRdata: req.body.QRdata },
  json: true };

  console.log(req.body.QRdata);

  if(req.body.QRdata){
    request(options, (error, response, body) => {
    if(error) console.log(error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    });
  } else {
    res.status(500).json({message:"no QR!!"});
    console.log("error");
  }

});

module.exports = router;
