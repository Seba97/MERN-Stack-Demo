import { post } from 'jquery';
import React, {Component} from 'react';
import MonitorPanel from './MonitorPanel';
import {} from 'cors'

class HeartRateMonitor extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            alertActive: false,
            alertMessage: "OK",
            unit: "BPM",
            chartData: [],
            chartLabels: []
        }
    }

    async componentDidMount(){

        // start data gethering every 30 sec
        try {
            setInterval(async () => {
                const heartRateApi = "https://heartratemonitor69.ew.r.appspot.com/getRecentHeartRateLogs";
                const response = await fetch(heartRateApi);
                const data = await response.json();
                this.parseVitalSignData(data);
            }, 15000);
        } catch(e) {
            console.log(e);
        }
        this.setState({loading:false});
    }

    async parseVitalSignData(data){
        var newChartData = [];
        var newChartLabels = [];
        data.forEach(element => {
            newChartData.push(element.value);
            var date = new Date(element.timestamp)
            var timeLabel = date.toTimeString().split(' ')[0];
            newChartLabels.push(timeLabel);
        });
        this.setState({chartData:newChartData, chartLabels:newChartLabels});

        var analysis = await this.analyzeVitalSignValues(newChartData);
        this.setState({alertActive:!analysis.areValuesWithinNormalParams, alertMessage:analysis.message})
    }

    async analyzeVitalSignValues(values){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const vitalSignCheckerApi = "https://vitalsigncheckerservice.ew.r.appspot.com/checkHeartRateValues";
        const response = await fetch(vitalSignCheckerApi, requestOptions);
        const status = await response.json();
        return status;
    }

    render(){
        return (
            <div className="HeartRateMonitorLoading">
                {
                    this.state.loading ? 
                    (
                        <div>loading...</div>
                    )
                    :
                    (
                        <div>
                            <MonitorPanel 
                                {...this.props}
                                {...this.state}
                                monitorTitle="Heart Rate Monitor" />
                        </div>
                    )
                }
            </div>
        )
    }
}

export default HeartRateMonitor;