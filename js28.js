//Synchronus operations - alert
//alert("First Line")
//alert("Second Line")
//alert("Third Line")


//asynchronous operations - fetch

/*const url = "https://apis.ccbp.in/jokes/random"
fetch(url)
.then((response)=>{
    return response.json();
})
.then((jsonData)=>{
    console.log(jsonData)
})
console.log("Data fetched;fetching is done")*/

//promises
let promiseObj = fetch("https://apis.ccbp.in/jokes/rando");

//promise states 

//after promise is fulfilled -> .then(response) callback is called
promiseObj.then((response)=>
{
    console.log(response);
})


//rejected promise will call catch() callback method
promiseObj.catch((error)=>
{
    console.log(error);
})


