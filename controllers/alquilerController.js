import HttpError from "http-errors";
import alquilerModel from '../models/alquilerModels.js';
import messagesapp from '../data/messages.js';

const postAlquiler = (req, res, next) => {

    console.log("---> alquilerController::getAlquiler");

    
    try {
        if (req.body.id,req.body)
        next(HttpError(400, { message: messagesapp.parameter_not_especified }));

        alquilerModel.postAlquiler(req.body.id,req.body.isbn,req.body.data);
      
    } catch (error) {
        next(HttpError(400, { message: error.message }));
    }
}
export default {
    postAlquiler,

}