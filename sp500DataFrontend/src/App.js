import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
class App extends Component {
	state = {
		stocks: []
	};

	async componentDidMount() {
		const response = await fetch('/api/stocks/tsla');
		const body = await response.json();
		this.setState({ stocks: body });
	}
	async componentDidUpdate(prevProps, prevState) {
		if (this.state.ticker !== prevState.ticker) {
			const response = await fetch('/api/stocks/' + this.state.ticker);
			const body = await response.json();
			this.setState({
				stocks: body,
				options: this.state.options,
			}
			);
		}
		if (this.state.valueStart != prevState.valueStart){
			const response = await fetch('/api/stocks/' + this.state.ticker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			console.log('/api/stocks/' + this.state.ticker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			const body = await response.json();
			this.setState({
				stocks: body,
				options: this.state.options,
			}
			);
		}
		if (this.state.valueEnd != prevState.valueEnd){
			const response = await fetch('/api/stocks/' + this.state.ticker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			console.log('/api/stocks/' + this.state.ticker + '/' + this.state.valueStart + '/' + this.state.valueEnd);
			const body = await response.json();
			this.setState({
				stocks: body,
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
		const { stocks } = this.state;
		return (
			<TableContainer component={Paper} id="DailyTable">
				<Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Ticker</TableCell>
							<TableCell align="right">Date</TableCell>
							<TableCell align="right">Open(g)</TableCell>
							<TableCell align="right">High</TableCell>
							<TableCell align="right">Low</TableCell>
							<TableCell align="right">Close</TableCell>
							<TableCell align="right">Adj. Close</TableCell>
							<TableCell align="right">Volume</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{stocks.map((stocks) => (
							<TableRow
								key={stocks.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row"> {stocks.ticker} </TableCell>
								<TableCell align="right">{stocks.date}</TableCell>
								<TableCell align="right">{stocks.open}</TableCell>
								<TableCell align="right">{stocks.high}</TableCell>
								<TableCell align="right">{stocks.low}</TableCell>
								<TableCell align="right">{stocks.close}</TableCell>
								<TableCell align="right">{stocks.adjClose}</TableCell>
								<TableCell align="right">{stocks.volume}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	}
}

export default App;