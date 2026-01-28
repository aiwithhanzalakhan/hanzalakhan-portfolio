// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI || "";

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI in .env.local");
// }

// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;
// import mongoose from "mongoose"


// const MONGODB_URI = process.env.MONGODB_URI as string;
// let cached = global.mongoose
// if (!cached) {
//      cached=global.mongoose={
//         conn:null,
//     promise:null     }
// }

// export const dbConnect=async()=>{
//     if (cached.conn) return cached.conn
//     if (cached.promise) {
//         cached.promise=mongoose.connect(MONGODB_URI,{
//             dbName:"Nextjs_project",

//         })
//     }
    
//         cached.conn=await cached.promise
//         console.log("database connected")
//         return cached.conn
    
// }

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI not defined");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;
  console.log("concetion ")
  console.log(cached.conn)
  return cached.conn;
 
}
