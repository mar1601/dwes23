import HttpError from "http-errors";
import booksModel from '../models/booksModel.js';
import messagesapp from '../data/messages.js';

const getBookByIsbn = (req, res, next) => {

    console.log("---> booksController::getBookByIsbn");

    if (!req.params.id)
        next(HttpError(400, { message: messagesapp.parameter_not_especified }));
    try {

        const id = req.params.id;
        booksModel.getBookByIsbn(id);
      
        

    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }

}

const removeBook = (req, res, next) => {
    console.log("---> booksController::removeBook");

    if (!req.params.id)
        next(HttpError(400, { message: messagesapp.parameter_not_especified  }));

    const id = req.params.id;
    if  (booksModel.removeBook(id) == -1) {
        next(HttpError(400, { message: messagesapp.book_dosent_exist  }));

    }


}

const createBook = (req, res, next) => {
    console.log(`---> booksController::createBook`);

    if (!req.body)
        next(HttpError(400, { message: messagesapp.parameter_not_especified }));

    try {
       
        booksModel.createBook(req.body);
      

    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }

}

const updateBook = (req, res, next) => {
    console.log(`---> booksController::updateBook`);


    try {
        if (!req.body)
            next(HttpError(400, { message: messagesapp.parameter_not_especified }));

        booksModel.updateBook(req.params.id,req.body);
    } 
    
    catch (error) {
        next(HttpError(400, { message: error.message }));
    }

}
const javaCat = (req, res, next) => {

        console.log("---> booksController::javaCat");
      try {
    
            
            booksModel.javaCat();
          
    
        } catch (error) {
            next(HttpError(400, { message: error.message }));
        }
}



export default {
    getBookByIsbn,
    removeBook,
    createBook,
    updateBook,
    javaCat
}