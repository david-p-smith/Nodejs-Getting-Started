const path = require('path');
const fs = require('fs');

const files = ['1-loop.js', 'dfdfs', '2-test-data.txt'];

files.forEach(file => {
    const filePath = path.resolve('./', file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);
});