import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

//---
config()
//---

const verifyToken = (req, res, next)=> {  
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
        if (err) {
            console.log('Token verification failed:', err);
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }

        req.UserId = decoded.id;
        console.log('Token verified, User ID:', req.UserId);
        next();
    });
}

export default verifyToken