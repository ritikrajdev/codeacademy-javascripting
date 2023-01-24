const http = require('http');

let tasks = [];
let id = 1;

const urlPatternMapper = {
  '/tasks': (req, res) => {
    switch (req.method) {
      case 'GET': {
        res.write(JSON.stringify(tasks));
        res.statusCode = 200;
        res.end();

        break;
      }
      case 'POST': {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', () => {
          let task = JSON.parse(body);
          task = {id, ...task};
          tasks.push(task);

          id++;
          res.statusCode = 201;
          res.write(JSON.stringify(task));

          res.end();
        });

        break;
      }
      default: {
        res.statusCode = 405;
        res.end();
      }
    }
  },

  '/tasks/\\d+': (req, res) => {
    const id = req.url.split('/').pop();
    switch (req.method) {
      case 'GET': {
        const selectedTask = tasks.filter(task => task.id == id);
        if (selectedTask.length !== 0) {
          res.write(JSON.stringify(selectedTask[0]));
        } else {
          res.statusCode = 404;
        }
        res.end();

        break;
      }
      case 'DELETE': {
        tasks = tasks.filter(task => task.id != id);
        res.statusCode = 204;
        res.end();

        break;
      }
      default: {
        res.statusCode = 405;
        res.end();
      }
    }
  }
};



http.createServer((req, res) => {
  for (let urlPattern of Object.keys(urlPatternMapper)) {
    if (RegExp(`^${urlPattern}$`).test(req.url)) {
      const requestHandler = urlPatternMapper[urlPattern];
      requestHandler(req, res);
      return;
    }
  }

  res.statusCode = 404;
  res.end();

}).listen(3001);
console.log('server running at http://localhost:3001');
