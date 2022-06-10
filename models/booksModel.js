import books from './books/books.js';
import messagesapp from "../data/messages.js";


class booksModel {

    async getBookByIsbn(id) {

        console.log(`---> getModel::getBookByIsbn = ${id}`);

        const _book = await books.getBookByIsbn(id);
        if (typeof _book == 'undefined')
            throw new Error(messagesapp.book_dosent_exist);
        return _book;
    }

    async removeBook(id) {

        console.log(`---> booksModel::removeBook = ${id}`);

        await books.removeBook(id);
    
    }



    async createBook(req) {

        console.log(`---> booksModel::createBook = ${req._id}`);

        if (typeof req == 'undefined')
            throw new Error(messagesapp.book_error_create);

        books.createBook(req);
   
    }

    async updateBook(id,data) { 
        console.log(`---> bookModel::updateBook = ${id}`);

        if (typeof data == 'undefined')
            throw new Error(messagesapp.book_error_update);
     
            books.updateBook(id,data);
    }

    async javaCat(){
        console.log(`---> getModel::javaCat`);

        const _book = await books.javaCat();
        if (typeof _book == 'undefined')
            throw new Error(messagesapp.book_dosent_exist);
        return _book;
    }

}

export default new booksModel()