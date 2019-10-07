// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;

console.log(PI, E, SQRT2);

//With require
//const { readFile } = require('fs'); //read file now available using readFile() rather than fs.readFile()

const circle = {
    label: 'circleX',
    radius: 2,
};

const circleArea = ({ radius }) => (PI * radius * radius).toFixed(2);

console.log(cricleArea(circle));