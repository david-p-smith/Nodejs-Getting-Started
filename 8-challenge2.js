// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times.  Print "Done" and let Node exit

const message = 'Hello World';
let counter = 0;

const interval = setInterval(
    () => {
        console.log(message);
        counter++;

        if (counter === 5) {
            clearInterval(interval);
            console.log('Done');
        }
    },
    1000
);