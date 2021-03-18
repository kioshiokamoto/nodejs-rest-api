import express from 'express';
const router = express.Router();
import Subscriber from '../models/Subscriber.js';
import getSuscriber from '../middleware/suscriber.js';
// Get all subscribers
router.get('/', async (req, res) => {
	try {
		const subscribers = await Subscriber.find();
		res.json(subscribers);
	} catch (error) {
		res.status(500).json({ message: err.message });
	}
});

// Get one subscriber
router.get('/:id', getSuscriber, async (req, res) => {
	res.json(res.subscriber);
});

// Create one subscriber
router.post('/', async (req, res) => {
	const subscriber = new Subscriber({
		name: req.body.name,
		subscribedChannel: req.body.subscribedChannel,
	});
	try {
		const newSubscriber = await subscriber.save();
		res.status(201).json(newSubscriber);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

// Update one subscriber
router.patch('/:id', getSuscriber, async (req, res) => {
	if (req.body.name != null) {
		res.subscriber.name = req.body.name;
	}

	if (req.body.subscribedChannel != null) {
		res.subscriber.subscribedChannel = req.body.subscribedChannel;
	}
	try {
		const updatedSubscriber = await res.subscriber.save();
		res.json(updatedSubscriber);
	} catch {
		res.status(400).json({ message: err.message });
	}
});

// Delete one subscriber
router.delete('/:id', getSuscriber, async (req, res) => {
	try {
		await res.subscriber.remove();
		res.json({ message: 'Deleted This Subscriber' });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

export default router;
