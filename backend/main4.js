// const express = require('express')
// const app = express()
// const port = 3000
// const fs=require('fs')
// const blog=require('./routes/blog')
// app.use('/blog',blog)

// app.use(express.static("public"))

// app.use((req, res, next) =>{
//   console.log('middleware 1')
//   console.log(req.headers);
//   req.annanya="im anna 18"
  
//   fs.appendFileSync("logs.txt",`${Date.now().toLocaleString()} is a ${req.method}\n`)
//   console.log(`${Date.now().toLocaleString()} is a ${req.method}`)
//   // res.send("only middleware 1 done")
//   next()
// })

// app.use((req, res, next) =>{
//   console.log('middleware 2')
//   next()
// })

// app.get('/', (req, res) => {
//   res.send('Hello World123!')
// })

// app.get('/about', (req, res) => {

//   res.send('Hello World123! about'+req.annanya)
// })

// app.get('/contact', (req, res) => {
//   res.send('Hello World123! contact')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })