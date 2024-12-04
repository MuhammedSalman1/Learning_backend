import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import mongoose, { ConnectionStates } from "mongoose";
// import {DB_NAME} from './constants'
import express from "express"
const app=express()

dotenv.config({
  path : './.env'
});


connectDB()
.then(()=>{

  app.on("error",(error)=>{
      console.log("error:",error)
    throw error
     })
    
  app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`Server is running at port : ${process.env.PORT}`);
    
  })
})
.catch((err)=>{
console.log('MONGO db connection failed !!! ',err);

})


// (async()=>{
// try {
//  await mongoose.connect(`${process.env.MONGODB_URI}/${ DB_NAME}`)
//  application.on("error",()=>{
//   console.log("error:",error)
// throw error
//  })

//  app.listen(process.env.PORT,()=>{
//   console.log(`App is listening on the port ${process.env.PORT}`);
  
//  })
  
// } catch (error) {
//   console.log('ERROR :',error);
//   throw err
// }
// })()