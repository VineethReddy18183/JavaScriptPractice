// let marks = [90,91,86,100,56,81];

// let filteredArray = marks.filter((val)=>
// {
//     return (val>90);
// })

// console.log(filteredArray);


let n = prompt("Enter the number");
let arr = [];

for(let i = 0;i<n;i++)
{
    arr.push(i+1);
}
console.log(arr);

let summ = arr.reduce((result,current)=>
{
    return result+current;
})
console.log(summ);


let product = arr.reduce((result,current)=>
{
    return result*current;
})
console.log(product);