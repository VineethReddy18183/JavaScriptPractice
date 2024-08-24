//block scope and global scope 
let age = 27;
if(age>18)
{
    let x = 0;
    console.log(x);

}
console.log(x);//error - since the scope of x is within the curly braces

//global scope 
let y = 30;
function func()
{
    console.log(y);
}
func();
console.log(y);