// function(exports, module, require, __filename, +__dirname) {

let g = 1; //this is local in node - it's inside the wrapping function (unlike browsers)

console.log(arguments);

exports.a = 42; //exports is an argument.  this is also an alias for module.exports

// return module.exports;
// } (module.exports,...)