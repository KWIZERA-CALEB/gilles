import AdminModel from "../Models/AdminModel.js";
import bcrypt from 'bcryptjs'
import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

//---
config()
//---

const add = (req, res)=> {

    // remove any whitespaces from inputs
    let full_name = req.body.full_name.trim()
    let email = req.body.email.trim()
    let password = req.body.password.trim()
    let title = req.body.title.trim()

    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    //validate the inputs
    if(full_name == "" || email == "" || password == "" || title == "") {
        res.json({
            message: "All fields are required"
        })
    }else if(!emailRegx.test(email)){
        res.json({
            message: "Invalid email address"
        })
    }else if(password.length < 8) {
        res.json({
            message: "Password must be 8+ characters"
        })
    }

    bcrypt.hash(req.body.password, 10, (error, hashedPassword)=> {
        if(error){
            console.log(error)
            res.json({
                message: 'An occurred hashing the password'
            })
        }

        //---
        let admin = new AdminModel({
            full_name: full_name,
            email: email,
            password: hashedPassword,
            title: title
        })
        admin.save()
        .then((result)=> {
            console.log(result)
            res.json({
                message: "User registered"
            })
            //---send email
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                  user: "kwizeracaleb91@gmail.com",
                  pass: "zojj xhxl jnmj tmsx",
                },
            });

            
            let message = {
                from: "Gilles Inc",
                to: `${email}`,
                subject: "Gilles Email Verification",
                text: "This is a verification message for Gilles account",
                html: `<p>${full_name}, It's a pleasure to have you on Gilles</p>`,
            }

            transporter.sendMail(message, (error, info) => {
                if (error) {
                  return console.log(error);
                }
                
              })
            //---send email
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Error occurred"
            })
        })
        //----

    })

    

}

const login = (req, res)=> {
    let email = req.body.email.trim()
    let password = req.body.password.trim()

    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(email == "" || password == "") {
        res.json({
            message: "All fields are required"
        })
    }else if(!emailRegx.test(email)) {
        res.json({
            message: "Invalid email"
        })
    }

    AdminModel.findOne({$or: [{email: email}]})
        .then((user)=> {
            if(user) {
                //check password
                bcrypt.compare(password, user.password, (error, result)=> {
                    if(error) {
                        res.json({
                            message: "Error occurred"
                        })
                    }

                    if(result) {
                        let token = jwt.sign({ email: user.email }, process.env.PRIVATE_KEY, { expiresIn: '1h' })
                        res.json({
                            message: "Login successfully",
                            token: token
                        })
                    }else{
                        res.json({
                            message: "Incorrect Password"
                        })
                    }
                })

            }else {
                res.json({
                    message: "No user found"
                })
            }
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Error occurred"
            })
        })

}


export default { add, login }



  