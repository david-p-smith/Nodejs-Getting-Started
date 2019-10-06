const square = (a) => {
    return a * a;
};

console.log(square(2));

const X = function () {
    // "this" here is the caller of X
};

const Y = () => {
    //"this" here is NOT the caller of Y

    //It's actually the same "this" found in Y's scope
};