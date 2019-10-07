//seperate first value of array and then create new array with items two, three and four
const [first, ...restOfItems] = [10, 20, 30, 40];

console.log(first, restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'David',
    lastName: 'Smith'
};

console.log(data);

//object reset spread
const { temp1, temp2, ...person } = data;

console.log(temp1, temp2, person);