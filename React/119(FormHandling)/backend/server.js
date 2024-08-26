import express from 'express'
import cors from 'cors' //npm i cors
import bodyParser from 'body-parser'
// const express = require('express')
const app = express()
const port=3000
app.use(cors())
// app.use(express.json()); // Replaces app.use(bodyParser.json())
app.use(bodyParser.json())
app.get('/',  (req, res)=> {
  res.send('Hello World')
})

app.post('/', (req, res)=> {
    console.log(req.body)
    res.send('Hello World')
  })

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})