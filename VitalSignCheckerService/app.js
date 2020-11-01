const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// request application/json parser


app.post('/checkHeartRateValues', async (req,res) => {
    
    var data = req.body;
    var checkerStatus = checkHeartRate(data);
    res.json(checkerStatus);
    
});
app.post('/checkBloodPressureValues', async (req,res) => {
    
    var data = req.body;
    var checkerStatus = checkBloodPressure(data);
    res.json(checkerStatus);
    
});
app.post('/checkBloodOxygenationValues', async (req,res) => {
    
    var data = req.body;
    var checkerStatus = checkBloodOxygenation(data);
    res.json(checkerStatus);
    
});

function checkHeartRate(data){
    const status = {
        areValuesWithinNormalParams: true,
        message: "Ok"
    };

    if(data != undefined){
        data.forEach(element => {
            if(element > 100 || element < 60){
                status.areValuesWithinNormalParams = false;
                status.message = "Danger";
            }
        });
    }
    return status;
}
function checkBloodPressure(data){
    const status = {
        areValuesWithinNormalParams: true,
        message: "Ok"
    };

    if(data != undefined){
        data.forEach(element => {
            if(element > 140 || element < 80){
                status.areValuesWithinNormalParams = false;
                status.message = "Danger";
            }
        });
    }
    return status;
}
function checkBloodOxygenation(data){
    const status = {
        areValuesWithinNormalParams: true,
        message: "Ok"
    };

    if(data != undefined){
        data.forEach(element => {
            if(element < 95){
                status.areValuesWithinNormalParams = false;
                status.message = "Danger";
            }
        });
    }
    return status;
}


app.listen(8080);