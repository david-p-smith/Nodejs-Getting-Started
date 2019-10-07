//seperate first value of array and then create new array with items two, three and four
const [first, ...restOfItems] = [10, 20, 30, 40];

console.log(first, restOfItems);