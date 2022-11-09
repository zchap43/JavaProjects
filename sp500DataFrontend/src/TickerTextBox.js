import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CandleChart from './CandleChart';

class TickerTextBox extends React.Component {
	constructor(props) {
		super(props);
        this.handleChange = this.handleChange.bind(this);
		console.log(this.props.valueTicker);
	};

    handleChange(e) {
        this.props.handleChangeTicker(e.target.value);
      }
	render() {
		const valueTicker = this.props.valueTicker;
		return (
			<div id="choiceButtons">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
						<TextField
							id="outlined"
							label="Ticker"
							type="text"
							value={valueTicker}
							onChange={this.handleChange}
							inputProps={{ maxLength: 5 }}
						/>
				</LocalizationProvider>
			</div>
		);
	}
}
export default TickerTextBox;