require("dotenv").config()
const express = require('express')
const usersController = require("./controller/users")
const server = express()
const mongoose = require('mongoose');
const cors = require("cors");


server.use(cors(
  {
    origin:"https://deploy-mern-1whq.vercel.app",
    methods:["GET", "POST" ,"PUT","PATCH", "DELETE"],
    credentials : true
  }
));

main().catch(err => console.log("err",err));

async function main() {
  await mongoose.connect(process.env.MONOGO_URL);
  // await mongoose.connect('mongodb://127.0.0.1:27017/ecommrece');
  console.log("db connected")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// console.log(process.env.DB_PASSWORD)
server.use(express.json()) // Cannot read properties of undefined  thats why use
// APi  Endpoint Route

// const auth = ((req,res,next,)=>{
//     if(req.body.password===123){
//         next()
//     }
//     else{
//         res.sendStatus(401)
//     }

// })

// server.use(auth)


server.get('/',(req,res)=>{
  res.send("server connnected")
  })
server.post('/products', usersController.createUser)
server.get('/products', usersController.getAllUsers)

server.get('/products/:id', usersController.getUser)
server.patch('/products/:id', usersController.updateUser)
server.put('/products/:id', usersController.replaceUser)
server.delete('/products/:id', usersController.deleteUser)

server.listen(process.env.PORT, () => {
  console.log('Server is running on port 8080')
})
