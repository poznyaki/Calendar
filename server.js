import express from 'express'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
})

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello from express server!")
})

app.post("/register", async(req, res)=>{
    const {login, email, password} = req.body

    try {
        let result = await pool.query(
            "SELECT * FROM Users WHERE login = ? OR email = ?",
            [login, email]
        )
        if(result[0].length > 0) {
            return res.status(400).send({
                error: "User with this login or email already exist!"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        await pool.query(
            "INSERT INTO Users (login, email, password) VALUES (?, ?, ?)",
            [login, email, hashedPassword]
        )
        res.status(201).send({message: "User register successefully!"})
    }
    catch(error) {
        res.status(500).send({
            error: "Error register user!"
        })
    }
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server starting on http://localhost:${PORT}`);
})