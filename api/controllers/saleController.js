const request = require('request');

exports.sale = (req, res, next) => {
  console.log(req.body);
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
          paymentActionList: [ { paymentType: req.body.paymentType, amount: req.body.amount, currencyID: 949, vatRate: 800 } ] } ],
     QRdata: req.body.QRdata },
     json: true
    };


    request(options, (error, response, body) => {
      if(error){
        res.status(500).json({message:"error"});
        res.end();
        console.log("error");
      } else {
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        next();
      }
    });

};
