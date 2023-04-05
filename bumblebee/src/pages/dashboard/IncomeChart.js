import React, { Component } from "react";
import Chart from "react-apexcharts";

class IncomeChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["2023-03-01", "2023-03-02", "2023-03-03", "2023-03-04"]
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [{
                from: 0,
                to: 100,
                color: '#5B2C6F'
              }]
            },
            fill: {
              colors: ['#5B2C6F']
            }
          }
        }
      },
      series: [
        {
          name: "Sales",
          data: [3, 2, 1, 2]
        },
      ]
    };
  }

  render() {
    return (

            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1000"
              height="400"
            />

    );
  }
}

export default IncomeChart;