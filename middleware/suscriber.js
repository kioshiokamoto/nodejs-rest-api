
import Subscriber from '../models/Subscriber.js';
const getSubscriber = async (req, res, next) => {
    
	try {
		//console.log(req.params.id)

		const subscriber = await Subscriber.findById(req.params.id);
    
		if (subscriber == null) {
			return res.status(404).json({ message: 'Cant find subscriber' });
		}
        res.subscriber = subscriber;
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	
	next();
};
export default getSubscriber;
