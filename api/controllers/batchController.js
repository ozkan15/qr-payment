const request = require('request');
exports.batch_close = (req, res, next) => {
  const options = {
    method:'GET',
    url:'https://sandbox-api.payosy.com/api/get_qr_batchclose',
    headers: { accept: 'application/json',
     'x-ibm-client-secret': 'Y6pR1pW4yG7eF0fQ1cS7tH8oK5yQ6tH3aW0oI6rN4kH2sS4iR4',
     'x-ibm-client-id': '42776325-d649-4ed2-83a4-8e66c796a2aa' },
  };

  request(options, (error, response, body) => {
    if(error){
      console.log(error);
      res.status(500).json({message:error});
      res.end();
    } else {
      console.log(body);
      next();
    }
  });
};
exports.batch_summary = (req, res, next) => {

  const options = {
    method:'POST',
    url:'https://sandbox-api.payosy.com/api/corridor/batchsummaries',
    headers:{ accept: 'application/json',
    'content-type': 'application/json',
    'x-ibm-client-secret': 'Y6pR1pW4yG7eF0fQ1cS7tH8oK5yQ6tH3aW0oI6rN4kH2sS4iR4',
    'x-ibm-client-id': '42776325-d649-4ed2-83a4-8e66c796a2aa' },
    body:{ posID: 'EC42776325d6494ed283a48e66c796a2aa', batchNumber: Number(req.body.batchNumber) },
    json:true
  };
  request(options, (error, response, body) => {
    if(error){
      console.log(error);
      res.status(500).json({message:error})
    } else {
      console.log(body);
      res.status(200).json({batchSummary: body, transactionDetails:req.transactionDetails});
    }
  });
};
