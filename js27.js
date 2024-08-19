//built-in constructors 

let myArray1 = new Array("a",2,true);
myArray1.push("pen");
console.log(myArray1);

let array = ["a",2,true] // js will call the built in array constructor 
console.log(array);


console.log(myArray1.constructor);
console.log(myArray1.length);


let myArray2 = new Array(1,2,3);

//prototype 
console.log(Array.prototype);

console.log(Object.getPrototypeOf(myArray2));

//built-in function constructor 

let Car = new Function("color,brand",`this.color = color,
                                     this.brand = brand,
                                     this.start = function()
                                     {
                                        console.log("Started");
                                    }`);
console.log(Function.prototype)

//whenever we create a function using function car(), internally js calls built-in constructor function.

function bike(color,brand)
{
    this.color = color,
    this.brand = brand,
    this.start = function()
    {
        console.log("Started");
    }
}

let bike1 = new bike("Blue","Suzuki")
console.log(bike1);
console.log(bike.prototype);

function Person(firstName,lastName)
{
    this.firstName = firstName,
    this.lastName = lastName
}

let person1 = new Person("Virat","Kohli");
let person2 = new Person("Sachin","Tendulkar");

console.log(person1)
console.log(person2)

Person.prototype.displayFullName = function()
    {
        return this.firstName + " " + this.lastName;
    }

console.log("The full name of person1 is : " + person1.displayFullName());
console.log("The full name of person2 is : "+ person2.displayFullName());


console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));


//to get the instance properties 

console.log(Object.getOwnPropertyNames(person1));
console.log(Object.getOwnPropertyNames(person2));






