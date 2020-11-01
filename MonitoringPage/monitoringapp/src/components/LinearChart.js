import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class LinearChart extends Component{

    constructor(props){
        super(props);

        this.data = {
            labels: this.props.chartLabels,
            datasets: [
              {
                label: this.props.unit,
                data: this.props.chartData,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
              },
            ],
          }
          
          this.options = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }
          
    }
    

    render(){
        return (
            <div className="chart">
                <Line data={this.data} options={this.options} />
            </div>
        )
    }
}

export default LinearChart;