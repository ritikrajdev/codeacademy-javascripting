const http = require('http');


const urlMapper = {
  '/': (req, res) => {
    if (req.method === 'GET') {
      res.write('root');
    } else {
      res.statusCode = 405;
    }
    res.end();
  },
  '/abc': (req, res) => {
    if (req.method === 'GET') {
      res.write('abc');
    } else {
      res.statusCode = 405;
    }
    res.end();
  }
};



http.createServer((req, res) => {
  if (req.method === 'GET') {
    const requestHandler = urlMapper[req.url];
    if (requestHandler === undefined) {
      res.statusCode = 404;
      res.end();
    }
    else {
      requestHandler(req, res);
    }

  }
}).listen(3001);
console.log('server running at http://localhost:3001');
