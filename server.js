const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

//morgan manage the logs request
app.use(morgan('dev'));

//serve files from public folder
app.use(express.static(__dirname +'/public'));

//use method
//__dirname refers to the absolute path of the current directory of the file
// that it is in
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});