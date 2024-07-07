//---

import express from "express";
import connect from './db.js'
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import SubscribersRoute from './Routes/SubscribersRoute.js'
import FeedbackRoute from './Routes/FeedbackRoute.js'
import ManagementRoute from './Routes/ManagementRoute.js'
import AdminRoute from './Routes/AdminRoute.js'
import ArticlesRoute from './Routes/ArticlesRoute.js'
import cors from 'cors'


//---


//----

const app = express()
app.use(bodyParser.json())
config()
app.use(cors())

app.use((res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()

})

//---




//connect to database 
connect((error)=> {
    if(error) {
        console.log('Failed to connect')
    }else{
        app.listen(process.env.PORT, ()=> {
            console.log(`Connected App running on${process.env.PORT} !`)
        })
    }
})


//--- Routes
app.use('/api', SubscribersRoute)
app.use('/api', FeedbackRoute)
app.use('/api', AdminRoute)
app.use('/api', ManagementRoute)
app.use('/api', ArticlesRoute)


//---