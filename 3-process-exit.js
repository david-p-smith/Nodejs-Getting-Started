setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
    console.log('Process will exit now.  See you later, aligator!');
});

console.log('Hello David!');