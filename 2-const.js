//Scalar values - defacto immutable
const answer = 42;
const greeting = 'Hello';

//Arrays and Objects - the properties can still be changed, however the references will point at the same array or object, even if the constant changes
const numbers = [2, 4, 6];
const person = {
    firstName: 'David',
    lastName: 'Smith'
};

Object.freeze(person); //First level (i.e. no subobjects,arrays) cannot now be changed - e.g. firstName must remain as 'David'.