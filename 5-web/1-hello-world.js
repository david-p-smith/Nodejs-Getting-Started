const http = require('http');

const requestListener = (req, res) => {
    console.dir(req, { depth: 0 });
    res.write('Hello World.  This is David! Changed without manual restart!\n');
    res.end();
};

//const server = http.createServer(requestListener); //no ()!  This would use return value rather than function!

const server = http.createServer();
server.on('request', requestListener);

server.listen(4242, () => {
    console.log('Server is running...');
});