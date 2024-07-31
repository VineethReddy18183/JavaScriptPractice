//spread operator

let arr1 = [1,2,3]
console.log(...arr1)

let arr2 = ['a','b','c',...arr1]
console.log(arr2)


let arr3 = [...arr2]
console.log(arr3)


let arr4 = [...arr1,...arr2]
console.log(arr4)


let person = {
    Name : "Vineeth Reddy B",
    age : 22,

}
console.log(person)
let personDetails = {...person,gender:"male"};
console.log(personDetails)

let address = {city : "Hyderabad",country : "India"};
personDetails = {...personDetails,...address}
console.log(personDetails);

function add(a,b,c)
{
    return a+b+c;
}

let inputArray = [1,2,3,4,5,6];
let ans = add(...inputArray)
console.log(ans)


function numbers1(...args)
{
    console.log(args)
}
numbers1(1,2,3)


function numbers2(a,b,...rest)
{
    console.log(a);
    console.log(b);
    console.log(rest)
}
numbers2(1,2,3,4,5,6,7,8,9)

//rest parameter
function sum(...args)
{
    let result = 0;
    for(let arg of args)
    {
        result+=arg;
    }
    console.log(result);
}

sum(1,2,3);
sum(1,2,3,4,5,6);

//Array destructuring 
let [a,b,c] = [1,2,3]
console.log(a);
console.log(b);
console.log(c)


let[d,e,f,...rest1] = [1,2,3,4,5,6,7,8]
console.log(d);
console.log(e);
console.log(f);
console.log(rest1)

//object destructuring 
let {firstName,...rest2} = {
    firstName : "Vineeth",
    lastName : "Reddy",
    age : 22

}
console.log(firstName);
console.log(rest2);


let{item,cost} = {
    item : "watch",
    cost : 100000
}
console.log(item)
console.log(cost)


//default parameters 
function result1(a = 2, b = 2)
{
    console.log(a);
    console.log(b)

}
result2();


function result2(c = 2,d = 4)
{
    console.log(c+d);
}
result2(3);


//template literals 
let fullName = "Vineeth Reddy B"
console.log(`My name is ${fullName}`)


let result = `the sum of 4 and 5 is ${4+5}`
console.log(result)


let person1 = {name : "Vineeth Reddy"};
console.log(`My name is ${person1.name}`);


console.log(`
    My name is 
    Vineeth Reddy B.
    I recently graduated from CBIT.
    I want to upskill myself in mern stack and DSA 
    in next one year`);
