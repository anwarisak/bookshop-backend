import express from 'express';
const router = express.Router();
import {getbook, getbooks, createbook,updatebook,deletebook} from '../controllers/book.controller.js'

router.get('/:id', getbook);
router.get('/',getbooks)
router.post('/',createbook);
router.put('/:id',updatebook);
router.delete('/:id',deletebook);

export default router;
