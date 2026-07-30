import "dotenv/config";

import express from "express"
import app from "./app.js";
import { connectToDB } from "./config/index.js";

connectToDB()
const PORT = process.env.PORT || 3000
app.listen(PORT,()=> {
    console.log(`Server is running in ${PORT}`)
})


