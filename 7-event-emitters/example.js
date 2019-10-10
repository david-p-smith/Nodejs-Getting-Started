const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();

myEmitter.emit('TEST_EVENT');