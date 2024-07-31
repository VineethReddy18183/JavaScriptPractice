//creating multiple objects
let car1 = {
    color : "Red",
    brand : "Maruthi",
    start : function()
    {
        console.log("started");
    }
}

let car2 = {
    color : "White",
    brand : "Tata",
    start : ()=>
    {
        console.log(started);
    }
}

console.log(car1);
console.log(car2);

//factory function 
function createCar(color,brand)
{
    return {
        color : color,
        brand : brand,
        start : function()
        {
            console.log("started");
        }
    }
}


console.log(createCar("blue","tata"));
console.log(createCar("yellow","maruthi"));

//shorthand notation 
/*
function createCar(color,brand)
{
    return{
        color,
        brand,
        start()
        {
            console.log("started")
        }
    }
}
*/

//creating objects using constructor 
function Car(color,brand)
{
    this.color = color,
    this.brand = brand,
    this.start = function(){
        console.log("started");

    }
}

let obj1 = new Car("green","Mahindra");
let obj2 = new Car("black","Mercedes");
let obj3 = new Car("white","Audi");
console.log(obj1);
console.log(obj2);
console.log(obj3);

//Javascript is an Object Oriented language- even function is an object. Function has properties and methods

console.log(Car.name) // prints the name of the function 
console.log(Car.length) // prints the number of arguments passed to the function 
console.log(typeof(Car)) // prints function


//every object has constructor property which refers to the constructor function using which the object is created 

console.log(obj1.constructor);

//built-in constructor functions
//date constructo function 
let now = new Date()
console.log(now)

let date = new Date("2002-10-23")
console.log(date);


//instance methods
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());

date.setFullYear(2024);
console.log(date);