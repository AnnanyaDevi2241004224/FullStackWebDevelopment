// const express =require('express')
// const blog = require('./routes/blog')
// const shop = require('./routes/shop')

// const app=express()
// const port=3000

// app.use(express.static("public"))
// app.use('/blog', blog)
// app.use('/shop', shop)
// app.get('/',(req,res)=>{
//   console.log('its a get request');  
//   res.send('hello viratt sir goat GET')
// })

// app.post('/',(req,res)=>{
//   console.log('its a post request');
//   res.send('hello virat sir goat POST')
// })

// app.put('/',(req,res)=>{
//   console.log('its a post request');
//   res.send('hello virat sir goat PUT')
// })



// //chaining
// // app.get('/',(req,res)=>{
// //   console.log('its a get request');  
// //   res.send('hello virat sir goat GET')
// // }).post('/',(req,res)=>{
// //   console.log('its a post request');
// //   res.send('hello virat sir goat POST')
// // }).put('/',(req,res)=>{
// //   console.log('its a post request');
// //   res.send('hello virat sir goat PUT')
// // })

// app.get('/index1',(req,res)=>{
//   console.log('it is the index page');  
//   res.sendFile(`templates/index1.html`,{root:__dirname})
// })

// app.get('/api',(req,res)=>{
//   console.log('res.json');  
//   res.json({a:1,b:2,c:3})
// })

// app.listen(port,()=>{
//     console.log(`example app listening on port ${port}`);
    
//   })
  