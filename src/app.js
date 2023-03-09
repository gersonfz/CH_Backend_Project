import express from 'express';
import apiRouter  from './routers/app.routes.js';



const app = express();

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', apiRouter);

export default app;