const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express!  This is David!')
});

server.get('/about', (req, res) => {
    res.send('Hello Express!  This is David on the About page!')
});

server.listen(4242, () => {
    console.log('Express Server is running...');
});