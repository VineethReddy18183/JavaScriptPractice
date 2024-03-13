//Loops


// for(let count = 1;count<=5;count++)
// {
//     console.log("Vineeth Reddy B");
// }

// let sum = 0;
// for(let count = 1;count<=5;count++)
// {
//     sum = sum+count;
// }
// console.log(sum);

// let i = 1;
// while(i<=10)
// {
//     console.log("i = ",i);
//     i=i+1;
// }

// let count = 1;
// do{
//     console.log("count = ",count);
//     count = count+1
    
// }while(count<10)


//for of loop 

// let str = "Vineeth";
// for(let val of str)
// {
//     console.log(val);
// }

//for in loop

// let student = {
//     fullName : "Vineeth Reddy B",
//     rollNumber : 60,
//     marks : 99,
//     result : "Pass"
 
// }

// for(let key in student)
// {
//     console.log("key = ",key ,", value = ",student[key]);
// }

// for(let i = 1;i<=100;i++)
// {
//     if(i%2 == 0)
//     {
//         console.log(i);
//     }
// }

let gameNum = 25;

let guessNum = prompt("Enter the guessed number: ");

if(gameNum == guessNum)
{
    console.log("Yes you are right");
}

else{
    while(gameNum != guessNum)
    {
        guessNum = prompt("Enter the guessed number: ");
        if(gameNum==guessNum)
        {
            console.log("Yes you are right");
            break;
        }
    }
}

