import Router from 'express';
import alquilerController from '../controllers/alquilerController.js';


const router = Router();

router.route('/:id')
    .put(alquilerController.postAlquiler);

    
export default router;