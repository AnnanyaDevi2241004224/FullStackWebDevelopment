// var slugify = require('slugify')

// let a = slugify('some string') // some-string
// console.log(a)

// // if you prefer something other than '-' as separator
// const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
// console.log(b)


// Further Reading: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// import {a,b,c} from "./server2.js"
// console.log(a,b,c);
// import obj from "./server2.js"
// console.log(obj);

const a= require("./server2.js")
console.log(a,__dirname,__filename);


