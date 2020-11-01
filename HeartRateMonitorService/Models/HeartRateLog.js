const mongoose = require('mongoose');

const HeartRateLogSchema = mongoose.Schema({
    timestamp: {
        type: Date,
        require: true
    },
    value: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('HeartRateLog', HeartRateLogSchema);