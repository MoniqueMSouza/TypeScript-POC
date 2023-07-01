import { Router } from 'express';
import { listAll, insert, updateMovie, deleteMovie } from '../controllers/movies-controllers';

const router = Router();

router.post('/movies', insert)
router.get('/movies', listAll)
router.put('/update', updateMovie)
router.delete('/delete', deleteMovie)

export default router;