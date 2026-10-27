import bcrypt from 'bcrypt';
import pool from '../db.js';
import jwt from 'jsonwebtoken';
export const signup=async (req,res) => {
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message:"All fields required for signup"
            })
        }
        const hashPassword=await bcrypt.hash(password,12);
        const result=await pool.query(
            `INSERT INTO users(name,email,password) 
                VALUES ($1,$2,$3) RETURNING id,name,email`,[name,email,hashPassword]
        );
        res.status(201).json({
            message:`User ${name} created successfully`,
            data:result.rows[0]
        })
    } catch (error) {
        console.error(error);
        
        if(error.code === "23505"){
            return res.status(409).json({
                message:"Account already exists"
            })
        }
        res.status(500).json({
            message:"Error encountered in signup"
        })
    }
}

export const login=async (req,res) => {
    try {
          const {name,email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"All fields required for login"
            })
        }
        const result=await pool.query(`SELECT * FROM users WHERE email=$1`,[email]);
        if(result.rows.length === 0){
            return res.status(400).json({
                message:"Incorrect email or password"
            })
        }
        const user=result.rows[0];
        const passMatch=await bcrypt.compare(password,user.password);
        if(!passMatch){
            return res.status(400).json({
                message:"Incorrect email or password"
            })
        }
        const token=jwt.sign(
            {
                id:user.id,
                email:user.email
            },
            process.env.JWT_SECRET,
            {expiresIn:"1h"}

        );
        res.status(200).json({
            message:"Login successful",
            token:token
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:"Error encountered in login"
        })
        
    }
}