setTimeout(
    () => {
        console.log('Hello after 4 seconds');
    },
    4 * 1000
);

const newFunc = () => {
    console.log('Hello after 4 seconds... again');
}

setTimeout(newFunc, 4000);

const rocks = who => {
    console.log(who + ' rocks');
};

setTimeout(rocks, 2 * 1000, 'David');