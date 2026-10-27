import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pool from './db.js';

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(cors());

app.use('/test',async(req,res)=>{
    try {
        const result=await pool.query(`SELECT NOW()`);
        res.status(200).json({
            message:"Connection successful",
            data:result.rows[0].now
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:"Connection not established"
        })
        
    }
})
const port=Number(process.env.PORT || 3000)
app.listen(port,()=>{
    console.log(`Server up and running on port ${port}`);
    
})