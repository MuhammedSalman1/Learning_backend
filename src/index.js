import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import mongoose, { ConnectionStates } from "mongoose";
// import {DB_NAME} from './constants'
// import express from "express"
// const app=express()

dotenv.config({
  path : './.env'
});


connectDB()


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