//hoisting - we won't get error javascript will move all the function declarations to the top before code execution...
let x = 20;
let y = 10;
let result = add(x,y);
console.log(result)

function add(a,b)
{
    return a+b;
}

//Note arrow functions and function expressions are not hoisted 

let c = 10;
let d = 30;
let ans = multiply(c,d)

let multiply = function(c,d)
{
    return c*d;
}