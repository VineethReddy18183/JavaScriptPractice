//async and await 

const url1 = "https://apis.ccbp.in/jokes/random"
const url2 = "https://apis.ccbp.in/jokes/random"
const myPromise = async ()=>
{
    const promiseObj1 = fetch(url1)
    const response1 = await promiseObj1 
    const promiseObj2 = fetch(url2)
    const response2 = await promiseObj2 


}

myPromise();


const doNetworkCall = async ()=>{
    const response = await fetch(url1)
    const jsonData = await response.json()
    console.log(jsonData)

}
doNetworkCall();


//error handling with async and await 

const url3 = "https://apis.ccbp.in/jokes/rando"
const doNetworkCall1 = async ()=>{

    try{
    const response = await fetch(url3)
    const jsonData = await response.json()
    console.log(jsonData)
    }
    catch(error)
    {
        console.log("There is some error")
    }

}
doNetworkCall1();




