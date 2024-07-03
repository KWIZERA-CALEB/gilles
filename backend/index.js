//---

import express from "express";
import connect from './db.js'
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import SubscribersRoute from './Routes/SubscribersRoute.js'
import FeedbackRoute from './Routes/FeedbackRoute.js'
import AdminRoute from './Routes/AdminRoute.js'


//---


//----

const app = express()
app.use(bodyParser.json())
config()

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


//---