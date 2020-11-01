import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import LinearChart from './LinearChart';

class AlertPanel extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.alertActive){
            return (
                <div className="AlertPanel">
                    <Alert variant="danger">
                        <Alert.Heading>{this.props.message}</Alert.Heading>
                    </Alert>
                </div>
            )
        }
        else{
            return (
                <div className="AlertPanel">
                    <Alert variant="success">
                        <Alert.Heading>Ok</Alert.Heading>
                    </Alert>
                </div>
            )
        }
    }
}

export default AlertPanel;