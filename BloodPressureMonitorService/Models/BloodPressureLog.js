const mongoose = require('mongoose');

const BloodPressureLogSchema = mongoose.Schema({
    timestamp: {
        type: Date,
        require: true
    },
    value: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('BloodPressureLog', BloodPressureLogSchema);