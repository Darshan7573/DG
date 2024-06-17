import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import userRouter from './routes/UserRoute.js'
import 'dotenv/config'

//app config

const app = express()
const port = process.env.PORT || 4000

//middleware

//used to when we get request from frontend
app.use(express.json())
//access the backend from frontend
app.use(cors('*'))


//DB connection
connectDB();

//api endpoints
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.send("Hello from server")
})

app.listen(port, () => {
    console.log(`Server running on http:localhost:${port}`)
})

//