const onlyFunc = delay => {
    console.log('Hello after ' + delay + ' seconds');
};

setTimeout(onlyFunc, 4 * 1000, 4);
setTimeout(onlyFunc, 8 * 1000, 8);

//Hello after 4 seconds

//Hello after 8 seconds

//You can define only ONE function