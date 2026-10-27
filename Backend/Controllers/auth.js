import bcrypt from 'bcrypt';
import pool from '../db.js';
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
            message:`User ${name} created successfully`;
            data:result.rows[0]
        })
    } catch (error) {
        if(error.code === "23505"){
            return res.status(409).json({
                message:"Account already exists"
            })
        }
        res.status(500).json({
            message:"Error e"
        })
    }
}