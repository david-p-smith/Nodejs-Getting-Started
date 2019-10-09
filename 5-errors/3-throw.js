const path = require('path');
const fs = require('fs');

const files = ['1-loop.js', 'dfdfs', '2-test-data.txt'];

files.forEach(file => {
    try {
        const filePath = path.resolve('./', file);
        const data = fs.readFileSync(filePath, 'utf-42');
        console.log('File data is', data);
    } catch (err) {
        if (err.code === 'EN0ENT') {
            console.log('File not found');
        } else {
            throw err;
        }
    }
});