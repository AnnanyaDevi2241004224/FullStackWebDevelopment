console.log("This is strings tutorial")
let a = "Virat";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);---->undefined

console.log(a.length)

let real_name = "Annanya"
let friend = "Virat"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)
let c="carry";
console.log(c.__proto__);
let d=18;
console.log(d.toFixed(5))
console.log(d.toPrecision(5))