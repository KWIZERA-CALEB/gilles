import mongoose from "mongoose";
import { config } from "dotenv"

//---

config()

//---



const db_url = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_DB_URL : process.env.DEV_DB_URL
console.log(db_url)


const connect = (callback) => {
    mongoose.connect(db_url)
        .then(()=> {
            console.log('Database connected')
            callback()
        })
        .catch((error)=> {
            console.log(error)
            callback()
        })

}

export default connect