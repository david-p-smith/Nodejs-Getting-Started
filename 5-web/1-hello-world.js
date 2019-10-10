const http = require('http');

const requestListener = (req, res) => {
    res.end('Hello World.  This is David!\n');
};

const server = http.createServer(requestListener); //no ()!  This would use return value rather than function!

server.listen(4242, () => {
    console.log('Server is running...');
});