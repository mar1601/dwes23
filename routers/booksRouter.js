import Router from 'express';
import booksController from '../controllers/booksController.js';


const router = Router();

router.use((req, res, next) => {
    console.log('---> booksRouter.js');
    next();
})

router.route('/java')
    .get(booksController.javaCat);

router.route('/:id')
    .get(booksController.getBookByIsbn)
    .put(booksController.updateBook)
    .delete(booksController.removeBook);

router.route('/add')
    .post(booksController.createBook); 



router.use((req, res, next) => {
    console.log('---> >>>>>');
    next();

})


export default router;