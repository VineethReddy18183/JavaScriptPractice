//ternary operator 
let speed = 70 
let message = speed>100?"To fast":"OK";
console.log(message)

//print minimum value among a and b 
let a = 20
let b = 30 

let minValue = (a>b)?b:a 
console.log(minValue);


//switch statement in javascript 
let day = 1
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;  
    default:
        console.log("Enter the day between 1 and 7");
        break;                         
}


let c = 10;
let d = 20;

let operation = "add"
switch(operation)
{
    case "add":
        console.log(`a+b = ${c+d}`)
        break 
    case "sub":
        console.log(`a-b = ${c-d}`)
        break  
    case "mul":
        console.log(`a*b = ${c*d}`)
        break 
    case "div":
        console.log(`a/b = ${c/d}`)
        break 
    default:
        console.log("Please specify the accurate operator");
        break              
}


//arrow functions
let sum = (a,b)=>
{
    console.log(`The sum of a and b is ${a+b}`);

}
sum(2,3);


let isEqual = (a,b)=>
{
    return (a===b);
}
console.log(isEqual(1,1));


let greet = (Name)=>
{
    console.log(`hi ${Name}`);
}
greet("Vineeth");


let square = (n)=>
{
    console.log(n*n);
}
square(8);

let sayHi = ()=>
{
    console.log("Say hi");
}
sayHi();


//returning objects using arrow functions 
let createUser = (Name)=>
{
    return {
        firstName : Name
    }
}
console.log(createUser("Vineeth Reddy B"));