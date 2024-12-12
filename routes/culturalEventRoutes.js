const express = require('express');
const router = express.Router();
const culturalEventController = require('../controllers/culturalEventController');

// CRUD Operations
router.get('/', culturalEventController.getEvents);
router.get('/:id', culturalEventController.getEventById);
router.post('/', culturalEventController.createEvent);
router.put('/:id', culturalEventController.updateEvent);
router.delete('/:id', culturalEventController.deleteEvent);

module.exports = router;
