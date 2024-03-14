// function hello()
// {
//     console.log("hello");
// }
// console.log("one");
// console.log("two");
// console.log("three");



// setTimeout(hello,5000);
// console.log("four");
// console.log("five");
// console.log("six");


// function sum(a,b)
// {
//     console.log("The sum is : ",a+b);
// }

// function difference(a,b)
// {
//     console.log("The difference is: ",(a-b));
// }
// function multiply(a,b)
// {
//     console.log("The product is: ",(a*b));
// }
// function divide(a,b)
// {
//     console.log("The quotient is:  ",(a/b));
// }
// function calculator(a,b,summCallBack,differenceCallBack,multiplyCallBack,divideCallBack)
// {
//     summCallBack(a,b);
//     differenceCallBack(a,b);
//     multiplyCallBack(a,b);
//     divideCallBack(a,b);

// }

// calculator(20,10,sum,difference,multiply,divide);


// function getData(dataId,getNextData)
// {
//     setTimeout(()=>
//     {
//         console.log("Data: ",dataId);
//         if(getNextData())
//         {
//             getNextData();
//         }
//     },3000);
// }
// getData(1,()=>{
//     getData(2,()=>
//     {
//         getData(3);
//     });
// });

// let promise = new Promise((resolve,reject)=>
// {
//     console.log("I am a promise");
//     resolve("successfully");
// }) 
// function getData(dataId,getNextData)
// {
//     let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>
//     {
//         console.log("Data: ",dataId);
//         if(getNextData())
//         {
//             getNextData();
//         }
//     },3000);
//     });
// }


// async function hello()

// {
//     console.log("Hello");
// }


function api(dataId)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            console.log("weather data",dataId);
            resolve(200)
        },2000);
    })
}

async function getWeatherData()
{
    console.log("getting weather data 1");
    await api(1);
    console.log("getting weather data 2");
    await api(2);
    console.log("getting weather data 3");
    await api(3);
}