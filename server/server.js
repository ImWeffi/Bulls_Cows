const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')

const app = express ()

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())

const port = 5000

app.listen(port, ()=> { 
     console.log('backend server')
})