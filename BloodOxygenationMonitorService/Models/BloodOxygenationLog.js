const mongoose = require('mongoose');

const BloodOxygenationLogSchema = mongoose.Schema({
    timestamp: {
        type: Date,
        require: true
    },
    value: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('BloodOxygenationLog', BloodOxygenationLogSchema);