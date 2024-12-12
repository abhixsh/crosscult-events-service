const mongoose = require('mongoose');

const culturalEventSchema = new mongoose.Schema({
    event_id: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },
    event_type: { type: String, required: true },
    img_link: { type: String },
    short_description: { type: String }
});

module.exports = mongoose.model('CulturalEvent', culturalEventSchema);