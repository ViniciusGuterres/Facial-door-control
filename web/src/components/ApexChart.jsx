import React from 'react';

import Chart from "react-apexcharts";

export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    getChosenChart() {
        switch (this.props.type) {
            case 'bar':
                return (
                    <BarChart
                        options={this.props.options}
                        series={this.props.series}
                    />
                )

            case 'donut':
                return (
                    <DonutChart
                        options={this.props.options}
                        series={this.props.series}
                        labels={this.props.labels}
                    />
                )

            case 'line':
                return (
                    <LineChart
                        options={this.props.options}
                        series={this.props.series}
                    />
                )

            default:
                return null;
        }
    }

    render() {
        return (
            <>
                {this.getChosenChart()}
            </>
        )
    }
}

function BarChart(props) {
    return (
        <Chart
            options={props.options}
            series={props.series}
            type="bar"
            width="100%"
            height='80%'
        />
    )
}

function DonutChart(props) {
    return (
        <Chart
            options={props.options}
            series={props.series}
            labels={props.labels}
            type='donut'
            width='100%'
            height='80%'
        />
    )
}

function LineChart(props) {
    return (
        <Chart
            options={props.options}
            series={props.series}
            type='line'
            width='100%'
            height='80%'
        />
    )
}