import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()


//CORS AND CONFIGURATION
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
}))

app.use(express.json({limit : "10kb"}))
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())

//ROUTES
import authRouter from "./routes/auth.route.js"

app.use('/api/auth',authRouter)

export default app