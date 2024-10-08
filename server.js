import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors';
import {UserRouter} from './routes/UserRoutes.js';
import {RoomsRouter} from './routes/CruiseRoute.js';
import cookieParser from 'cookie-parser';
dotenv.config()


const app=express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://frontend-cruise.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// const cors = require('cors');
// app.use(cors({ origin: 'https://frontend-cruise.vercel.app' }));
app.use(cors({
    origin: ['https://frontend-cruise.vercel.app/' ],
    credentials:true
}));

// app.use(cors());
app.use(express.json())
app.use('/client',UserRouter)
app.use('/api/explore',RoomsRouter)


mongoose.connect('mongodb+srv://Cruise:Cruise@cluster0.y4emazr.mongodb.net/CruiseWebsite')



const port = process.env.PORT || 3010;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
