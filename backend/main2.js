// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 5500;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<h1>hiiiiiiihellolllllkoo</h1>`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express =require('express')
const app=express()
const port=3000
app.get('/',(req,res)=>{
  res.send('hello viratttt sir')
})

app.get('/about',(req,res)=>{
  res.send('hello about')
})

app.get('/contact',(req,res)=>{
  res.send('hello contact')
})

app.get('/blog',(req,res)=>{
  res.send('hello my blog')
})

app.get('/blog/:slug/:next',(req,res)=>{
  console.log(req);
  console.log(req.params);
  console.log(req.q);
  
  res.send(`helloooo ${req.params.slug} and ${req.params.next}`)

})

// app.get('/blog/intro-to-java',(req,res)=>{
//   res.send('hello my blog intro-to-java')
// })

// app.get('/blog/intro-to-c',(req,res)=>{
//   res.send('hello my blog intro-to-java' )
// })


app.listen(port,()=>{
  console.log(`example app listening on port ${port}`);
  
})
