let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
arr[1] = 18;
console.log(arr);
console.log(typeof arr);
console.log(arr[5]);
console.log(arr.toString());
console.log(arr.join("*"));
console.log(arr.pop());
console.log(arr);
arr.push(100);
console.log(arr);
console.log(arr.push("anna"));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift("virat"));
console.log(arr);
console.log(delete (arr[5]));
console.log(arr);
let arr2 = [9, 20]
let arr3 = [19, 20]
console.log(arr.concat(arr2, arr3));
console.log(arr);
console.log(arr.sort());
console.log(arr);
console.log(arr.splice(4, 5));
console.log(arr);
console.log(arr.splice(0, 1, 100000, 20000));
console.log(arr);
console.log(arr.slice(0, 2));
console.log(arr);
console.log(arr.slice(2));
console.log(arr);
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);

}
arr.forEach(element => {
    console.log(element);

});
arr.forEach((value, index, arr) => {
    console.log(value, index, arr);

});
console.log(arr);
const greaterthanseven = (e) => { if (e > 7) { return true; } return false; }
console.log(arr.filter(greaterthanseven));
let arr4 = [1, 2, 3, 4, 5];
const red = (a, b) => {
    return (a+b);
}
console.log(arr4.reduce(red));
let arr5=Array.from("virat");
console.log(arr5);
let arr6= new Array(1,2,3,4,5);
console.log(arr6);



