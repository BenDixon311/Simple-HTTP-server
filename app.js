const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
   res.setHeader('Content-Type', 'text/html');
   res.write('<h1>Welcome to my page!</h1>');

        return res.end();
    }

    if (url === '/api' && method === 'POST') {
            // do this
    }
});


server.listen(5000);


