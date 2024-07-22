console.log('this is a promise');
let prom1=new Promise((resolve, reject) => {
    let a=Math.random()
if (a>0.5)
{
    reject("random numbers not supported");
}
else
{
    setTimeout(()=>{
        console.log('yes am done');
        resolve("it is actually done...")
        
    },3000)
}
})

let prom2=new Promise((resolve, reject) => {
    let a=Math.random()
if (a>0.5)
{
    reject("random numbers not supported 2");
}
else
{
    setTimeout(()=>{
        console.log('yes am done 2');
        resolve("it is actually done... 2")
        
    },1000)
}
})
let p3=Promise.all([prom1,prom2]) //allSettled
p3.then((a)=>
{
console.log("==>",a);
}).catch((err)=>{
    console.log(err);
})
// prom1.then((a)=>
// {
// console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })
// prom2.then((a)=>
//     {
//     console.log(a);
//     }).catch((err)=>{
//         console.log(err);
//     })