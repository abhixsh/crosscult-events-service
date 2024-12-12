const CulturalEvent = require('../models/culturalEvent');

// Get all events
exports.getEvents = async (req, res) => {
    try {
        const events = await CulturalEvent.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await CulturalEvent.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new event
exports.createEvent = async (req, res) => {
    const { event_id, title, description, start_date, end_date, location, country, event_type, img_link, short_description } = req.body;

    const newEvent = new CulturalEvent({
        event_id,
        title,
        description,
        start_date,
        end_date,
        location,
        country,
        event_type,
        img_link,
        short_description
    });

    try {
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an event
exports.updateEvent = async (req, res) => {
    try {
        const updatedEvent = await CulturalEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await CulturalEvent.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
