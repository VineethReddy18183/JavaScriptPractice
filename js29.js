//creating promises - resolve

const myPromise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            resolve("1 sec completed")
        },1000)
    })

}


console.log(myPromise());

myPromise().then((fromResolve)=>
{
    console.log(fromResolve)
})

//reject 

const customPromise = ()=>
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            reject("Promise rejected");
        },1000)
    })
};

customPromise().catch((fromReject)=>{
    console.log(fromReject)
})
