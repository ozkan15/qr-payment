const request = require('request');
exports.refund = (req, res, next) => {


  const options = { method: 'POST',
  url: 'https://sandbox-api.payosy.com/api/refund',
  headers:
   { accept: 'application/json',
     'content-type': 'application/json',
     'x-ibm-client-secret': 'Y6pR1pW4yG7eF0fQ1cS7tH8oK5yQ6tH3aW0oI6rN4kH2sS4iR4',
     'x-ibm-client-id': '42776325-d649-4ed2-83a4-8e66c796a2aa' },

  body: JSON.stringify(
   { returnCode: 1000,
     returnDesc: 'OK',
     receiptMsgCustomer: 'beko Campaign',
     receiptMsgMerchant: 'beko Campaign Merchant',
     QRdata: req.body.QRdata ,
     json: true}),
    };

  request(options, (error, response, body) => {
    if(error){
      console.log(`Failed: ${error.message}`);
      res.status(500).json({message: error.message});
      res.end();
    } else {
      console.log('Success:' + body);
      next();
    }
  });


};
