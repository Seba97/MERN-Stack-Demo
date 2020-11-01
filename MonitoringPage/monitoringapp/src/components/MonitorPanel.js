import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import LinearChart from './LinearChart';
import AlertPanel from './AlertPanel';

class MonitorPanel extends Component{

    constructor(props){
        super(props);
        this.state = {
            monitorTitle: props.monitorTitle,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.chartData != this.state.chartData){
            this.setState({chartData: prevProps.chartData});
        }
        if(prevState.chartLabels != this.state.chartLabels){
            this.setState({chartLabels: prevProps.chartLabels});
        }
    }

    render(){
        return (
            <div className="MonitorPanel">
            <Row>
                <h3>{this.state.monitorTitle}</h3>
            </Row>
                <AlertPanel 
                    {...this.props}
                    {...this.state}/>
            <Row>
                <LinearChart 
                    {...this.props}
                    {...this.state}/>
            </Row>
            </div>
        )
    }
}

export default MonitorPanel;