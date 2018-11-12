const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const PORT = 8080;
server.listen(PORT, 'localhost', (result, error) => {
  if (!error) console.log(`API server started listening on http://localhost:${PORT}`);
  else console.log(error);
});

