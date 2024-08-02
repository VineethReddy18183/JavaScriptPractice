//this in object methods refers to object that is calling the function
let car = {
    color:"blue",
    brand:"tata",
    start: function()
    {
        console.log(this);
    }
}
car.start();

//this in regular function refers to window function
function func()
{
    console.log(this)
}
func()

//this in console context also refers to window object 
console.log(this)

//this in arrow functions depends on 2 scenarios , context and when the arrow function is defined
//arrow functions inherit this from context in which code is defined 

let car1 = {
    color:"blue",
    brand:"audi",
    start1:()=>
    {
        console.log(this);
    }
}
car1.start1();


let car2 = {
    color:"black",
    brand:"Mahindra",
    start: function()
    {
        console.log(this)
        setTimeout(()=>
        {
            console.log(this)
        },1000)
    }
}

car2.start();


let carNames = ["Audi","Tata","BMW"];

let cars = {
    color:"red",
    brand:"Audi",
    start:function()
    {
        let audiIndex = carNames.findIndex((cars)=>
        {
            console.log(this);
        })
    }
}
cars.start();

//this in constructor functions 
function Car(color,brand)
{
    this.color = color
    this.brand = brand 
    this.startCar = function()
    {
        console.log(this)
    }
}
let carObj = new Car("black","Mercedes");
console.log(carObj)
carObj.startCar();


//this in constructor functions --> arrow functions as method

function Bike(color,brand)
{
    this.color = color,
    this.brand = brand,
    this.startBike = ()=>
    {
        
        console.log(this);
    }
}
let bikeObj = new Bike("red","pulser");
console.log(bikeObj);
bikeObj.startBike();

//mutable and immutable values in javascript
//primitives(number,string,boolean) are immutable,objects are mutable
let x = 5;
let y = x;
y = 10;
console.log(x);
console.log(y)

//objects are mutable 
let a = {value: 5};
let b = a
let c = {value:20}
b.value = 10
console.log(a) // value:10
console.log(b) // value:10
b = c
console.log(a);//value:10
console.log(b);//value:20

//declaring variables using let ,constant

let m; //initialization is not mandatory
m = 100;
console.log(m);
m = 200;
console.log(m);


const n = 300;//initialization is mandatory
console.log(n);
//n = 800 // error - cannot reassign


const bottle = {
    color:"green",
    brand:"tupperware"
}
console.log(bottle);
bottle.color = "red"
console.log(bottle);


