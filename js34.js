//map - is used to perform an operation on each element of array 

const numbers = [1,2,3,4]
const ansArray = numbers.map((number)=>number*number)
console.log(ansArray);

//filter 
const numberList = [1,-2,-3,4];
const ansElements = numberList.filter((number)=> number > 0)
console.log(ansElements);

//reduce 
let arr = [1,2,3,4]
let outputValue = arr.reduce((acc,currentValue)=>acc+currentValue)
console.log(outputValue);



