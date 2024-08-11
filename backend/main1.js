const { error } = require("console");
const fs=require("fs");
console.log('starting');

// fs.writeFileSync("virat.txt","I love you");

fs.writeFile("virat2.txt","I love you",()=>{
    console.log('done');
    // fs.readFile("virat.txt",(error,data)=>{
    //     console.log(error,data.toString());
        
    // })
})
fs.appendFile("virat.txt"," GOAT",(error,data)=>{

console.log("ll",data,error);

})
console.log('ending');
