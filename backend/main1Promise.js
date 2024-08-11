import fs from "fs/promises"
let a=await fs.readFile("virat.txt")
console.log(a.toString());
let b=await fs.appendFile("virat.txt","\n\n\n this is promise");
console.log(b);
