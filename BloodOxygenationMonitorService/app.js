const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const BloodOxygenationLog = require('./Models/BloodOxygenationLog');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// request application/json parser


app.post('/registerBloodOxygenationLog', async (req,res) => {
    const bloodOxygenationLog = new BloodOxygenationLog({
        timestamp: new Date(req.body.timestamp*1000),
        value: req.body.value
    });

    try {
        const savedLog = await bloodOxygenationLog.save();
        res.json(savedLog);
    } catch(err) {
        res.json({ message: err });
    }
});

app.get('/getRecentBloodOxygenationLogs', async (req,res) => {

    const msPerMinute = 60000;
    const fiveMinutesAgo = new Date(Date.now()-(msPerMinute*5));
    try {
        const recentLogs = await BloodOxygenationLog.find({timestamp: { $gte: fiveMinutesAgo }}); 
        res.json(recentLogs);  
    } catch(err) {
        res.json({ message: err });
    }
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
     console.log('Blood Oxygenation Monitor Service: CONNECTED TO DATABASE CLUSTER'); 
});

app.listen(8080);