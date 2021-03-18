import express from 'express';
const router = express.Router();
import Subscriber from '../models/Subscriber.js';
import getSuscriber from '../middleware/suscriber.js';
import { deleteSub, getAllSubs, getSub, postSub, updateSub } from '../controllers/subscriber.js';
// Get all subscribers
router.get('/', getAllSubs);

// Get one subscriber
router.get('/:id', getSuscriber, getSub);

// Create one subscriber
router.post('/', postSub);

// Update one subscriber
router.patch('/:id', getSuscriber, updateSub);

// Delete one subscriber
router.delete('/:id', getSuscriber, deleteSub);

export default router;
