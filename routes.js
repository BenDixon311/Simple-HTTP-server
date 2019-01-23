const fs = require('fs');

const requestHandler = ((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<h1>Welcome to my Server!</h1>');
        res.write('</html>');
     
        return res.end();
         }
     
     if (url === '/api') {
            const stephCurry = {
                number: 30,
                team: 'Golden State Warriors',
                position: 'Point Guard'
            }

            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(stephCurry));
            return res.end();
         }

    req.on('end', () => {
        const body = Buffer.concat(body).toString();
        console.log(body.split('=')[1]);
    })
});



module.exports = requestHandler;