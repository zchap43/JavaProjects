import React, { Component } from 'react';
import './App.css';
import dayjs, { Dayjs } from 'dayjs';
import ReactApexChart from "react-apexcharts";
import FormPropsTextFields from './TickerTextBox.js'

class ApexChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ticker: "TSLA",
			valueEnd: Date(dayjs('2030-12-31T00:00:00')).toString(),
			valueStart: Date(dayjs('2000-01-01T00:00:00')).toString(),
			series: [{
				data: [{}]
			}],
			options: {
				chart: {
					type: 'candlestick',
				},
				title: {
					text: 'CandleStick Chart',
					align: 'left'
				},
				xaxis: {
					type: 'datetime'
				},
				yaxis: {
					tooltip: {
						enabled: true
					}
				},
				id: props.chartId,
			},
		};
	}
	async componentDidMount() {
		const response = await fetch('/api/stocks/' + this.state.ticker);
		const body = await response.json();
		this.setState({
				series: [{
				data: body.map(day => ({x: new Date(day.date), y:[day.open, day.high, day.low, day.close]}) )
				}],
				options: this.state.options,
			}
		);
	}
	async componentDidUpdate(prevProps, prevState) {
		if (this.state.ticker !== prevState.ticker) {
			const response = await fetch('/api/stocks/' + this.state.ticker);
			const body = await response.json();
			this.setState({
				series: [{
					data: body.map(day => ({ x: new Date(day.date), y: [day.open, day.high, day.low, day.close] }))
				}],
				options: this.state.options,
			}
			);
		}
		if (this.state.valueStart != prevState.valueStart){
			const response = await fetch('/api/stocks/' + this.state.ticker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			console.log('/api/stocks/' + this.state.ticker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			const body = await response.json();
			this.setState({
				series: [{
					data: body.map(day => ({ x: new Date(day.date), y: [day.open, day.high, day.low, day.close] }))
				}],
				options: this.state.options,
			}
			);
		}
		if (this.state.valueEnd != prevState.valueEnd){
			const response = await fetch('/api/stocks/' + this.state.ticker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			console.log('/api/stocks/' + this.state.ticker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			const body = await response.json();
			this.setState({
				series: [{
					data: body.map(day => ({ x: new Date(day.date), y: [day.open, day.high, day.low, day.close] }))
				}],
				options: this.state.options,
			}
			);
		}
	}
	handleCallback = (tick, start, end) => {
		this.setState({ticker: tick})
		this.setState({valueStart: start});
		this.setState({valueEnd: end});
	}
	render() {
		return (
			<div>
			<div>
			<FormPropsTextFields parentCallback = {this.handleCallback}/>
			</div>
			<div id="chart" >
			<ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" />
			</div>
			</div>
		);
	}
}
export default ApexChart;