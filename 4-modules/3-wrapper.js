// function(exports, module, require, __filename, +__dirname) {

let g = 1; //this is local in node - it's inside the wrapping function (unlike browsers)

console.log(arguments);

exports.a = 42; //exports is an argument.  this is also an alias for module.exports
module.exports.b = 37; //this is part of the same structure above - forming part of the api

//exports = ... <--- this would not change module.exports - simply reassign the alias to point at the new value or object

//to make exports a function
//exports = () => {}; <--- this would not work

// return module.exports;
// } (module.exports,...)