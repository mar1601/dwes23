import express from 'express';
import booksRouter from './routers/booksRouter.js';
import clientErrorHandler from './middleware/errorHandler.js';
import errorRouter from './routers/errorRouter.js';

const app=express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log('---->app.js');
    next();
});

app.use('/books',booksRouter);

app.use('/alquiler',booksRouter);


app.use('*',errorRouter);
app.use(clientErrorHandler);


export default app;