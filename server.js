import express from 'express';

import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import subs from './routes/subs.js';
//Conexion a bd
connectDB();
const app = express();

//Middleware
app.use(express.json())



app.use('/subs', subs);



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Servidor en http://localhost:${PORT}`));

process.on("unhandledRejection", (err,promise)=>{
    console.log(`Logged Error: ${err}`);
    server.close(()=>process.exit(1))
});