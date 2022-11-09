import React from 'react';
import './App.css';
import dayjs from 'dayjs';
import TickerTextBox from './TickerTextBox.js';
import StartDateSelector from './startDateSelector.js';
import EndDateSelector from './EndDateSelector.js';
import ReactApexChart from "react-apexcharts";

class CandleChart extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
		this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
		this.handleChangeTicker = this.handleChangeTicker.bind(this);
		this.handleChangePricingOptions = this.handleChangePricingOptions.bind(this);
		this.handleChangePricingSeries = this.handleChangePricingSeries.bind(this);
		this.state = {
			valueEnd: dayjs('2030-12-31T00:00:00'),
			valueStart: dayjs('2000-01-01T00:00:00'),
			valueTicker: "GOOG",
			pricingSeries: [{
				data: [{}]
			}],
			pricingOptions: {
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
			IncomeStatementSeries: [{
				data: [{}]
			}],

		}
		console.log(this.state);
	};
	async componentDidMount() {
		const response = await fetch('/api/stocks/' + this.state.valueTicker);
		const body = await response.json();
		this.setState({
				pricingSeries: [{
				data: body.map(day => ({x: new Date(day.date), y:[day.open, day.high, day.low, day.close]}) )
				}],
				pricingOptions: this.state.pricingOptions,
			}
		);
		const IncResponse = await fetch('/api/incomeStatements/' + this.state.valueTicker);
		console.log(IncResponse);
		const IncBody = await IncResponse.json();
		this.setState({
			IncomeStatementSeries: [{
				data: body.map(quarter => ({ x: new Date(quarter.date), y: [quarter.ticker, quarter.researchDevelopment,quarter.effectOfAccountingCharges,
				quarter.incomeBeforeTax, quarter.minorityInterest,quarter.netIncome, quarter.sellingGeneralAdministrative,quarter.grossProfit,quarter.ebit, 
				quarter.operatingIncome, quarter.otherOperatingExpenses, quarter.interestExpense,
				quarter.extraordinaryItems, quarter.nonRecurring, quarter.otherItems, quarter.incomeTaxExpense, quarter.totalRevenue, 
				quarter.totalOperatingExpenses, quarter.costOfRevenue, quarter.totalOtherIncomeExpenseNet,
				quarter.discontinuedOperations, quarter.netIncomeFromContinuingOps, quarter.netIncomeApplicableToCommonShares] }))
			}],
		}
		);
		console.log(this.state)
	}
	handleChangeTicker = newValueTicker => this.setState({ valueTicker: newValueTicker });
	handleChangeStartDate = newValueStartDate => this.setState({ valueStart: newValueStartDate });
	handleChangeEndDate = newValueEndDate => this.setState({ valueEnd: newValueEndDate });
	handleChangePricingSeries = newValuePricingSeries => this.setState({ pricingSeries : newValuePricingSeries });
	handleChangePricingOptions = newValuePricingOptions => this.setState({ pricingOptions : newValuePricingOptions });
	async updateDataTicker(){
		const response = await fetch('/api/stocks/' + this.state.valueTicker);
			const body = await response.json();
			this.setState({
				pricingSeries: [{
					data: body.map(day => ({ x: new Date(day.date), y: [day.open, day.high, day.low, day.close] }))
				}],
				pricingOptions: this.state.pricingOptions,
			}
		);
	}
	async updateIncomeStatements(){
		const response = await fetch('/api/incomeStatements/' + this.state.valueTicker);
			const body = await response.json();
			this.setState({
				incomeStatementSeries: [{
					data: body.map(day => ({ x: new Date(day.date), y: [day.open, day.high, day.low, day.close] }))
				}],
			}
		);
	}
	async componentDidUpdate(prevProps, prevState) {
		if (this.state.valueTicker !== prevState.valueTicker) {
			this.updateDataTicker();
			this.updateIncomeStatements();
		}
		if (this.state.valueStart !== prevState.valueStart){
			const response = await fetch('/api/stocks/' + this.state.valueTicker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			console.log('/api/stocks/' + this.state.valueTicker + '/' + this.state.valueStart + '/' + prevState.valueEnd);
			const body = await response.json();
			this.setState({
				pricingSeries: [{
					data: body.map(day => ({ x: new Date(day.date), y: [day.open, day.high, day.low, day.close] }))
				}],
				pricingOptions: this.state.pricingOptions,
				}
			);
		}
		if (this.state.valueEnd !== prevState.valueEnd){
			const response = await fetch('/api/stocks/' + this.state.valueTicker + '/' + prevState.valueStart + '/' + this.state.valueEnd);
			console.log('/api/stocks/' + this.state.valueTicker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			const body = await response.json();
			this.setState({
				pricingSeries: [{
					data: body.map(day => ({ x: new Date(day.date), y: [day.open, day.high, day.low, day.close] }))
				}],
				pricingOptions: this.state.pricingOptions,
				}
			);
		}
	}

	render() {
		const valueStart = this.state.valueStart;
		const valueEnd = this.state.valueEnd;
		const valueTicker = this.state.valueTicker;
		return (
			<div id="chart" >
				<TickerTextBox valueTicker = {valueTicker} handleChangeTicker = {this.handleChangeTicker} />
				<StartDateSelector valueStart = {valueStart} handleChangeStartDate = {this.handleChangeStartDate} />
				<EndDateSelector valueEnd = {valueEnd} handleChangeEndDate = {this.handleChangeEndDate} />
				<ReactApexChart options={this.state.pricingOptions} series={this.state.pricingSeries} type="candlestick" />
			</div>
		);
	}
}
export default CandleChart;