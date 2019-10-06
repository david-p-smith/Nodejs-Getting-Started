const onlyFunc = message => {
    console.log(message);
};

setTimeout(onlyFunc, 4000, 'Hello after 4 seconds');
setTimeout(onlyFunc, 8000, 'Hello after 8 seconds');

//Hello after 4 seconds

//Hello after 8 seconds

//You can define only ONE function