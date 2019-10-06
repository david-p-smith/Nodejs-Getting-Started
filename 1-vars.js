{
    //Block Scope
    {
        //Nested Block Scope
    }
}

if (true) {
    //Block Scope
}

for (let i = 1; i <= 10; i++) {
    //Block Scope
}

function sum(a, b) {
    //Function Scope
    var result = a + b;
    return result;
};

sum(4 + 3);