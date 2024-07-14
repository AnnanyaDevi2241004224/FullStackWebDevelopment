console.log("code is runnning ");
var a=18;
let b=2;
b=b+1;
var a1=18;
console.log("b=",b);
console.log("a1=",a1);

var c="virat"
console.log("a+b=",a+b);
console.log("type of a =",typeof a);
console.log("type of b =",typeof b);
console.log("type of c =",typeof c);
//var a1=9; valid statement 
//let b=2; cannot be redeclared
{
    let b=2;
     var a1=6;
    console.log("b=",b);
    console.log("a1=",a1);


}
console.log("b=",b);
console.log("a1=",a1);
let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)
let o = {
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true,
    "is good":true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);
console.table([a1,a,b,c,o]);

//node new.js
/*
prefer not to use var due to scope issues
const cannot be redec;ared or updated
var can be redeclared or updated
let cannot be redeclared but can be updated
*/