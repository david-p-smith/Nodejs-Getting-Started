const timerId = setTimeout(
    () => console.log('You will not see this one!'),
    0 //makes immidiate
);

//setImmediate
const immidiateTimer = setImmediate(
    () => console.log('I\'m immediate!')
)

clearTimeout(timerId);