setTimeout(
    () => console.log('Hello after half a second.  Well, MAYBE!'),
    500, //minimum delay
);

for (let i = 0; i < 1e10; i++) { //1 bil!
    //simulation of busy CPU - blocking node
    //p.s. bit blocking function === very bad!
}