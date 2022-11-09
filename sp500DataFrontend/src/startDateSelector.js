import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import IncomeStatementsTable from './IncomeStatementsTable';
import CandleChart from './CandleChart';

class StartDateSelector extends React.Component {
	constructor(props) {
		super(props);
        this.handleChange = this.handleChange.bind(this);
	};

    handleChange(e) {
		try {
			this.props.handleChangeStartDate(e.$d.toISOString().replace(/T.*/,'').split('-').join('-'));
		} catch (error) {
			console.log("Invalid Date");
		}
      }
	render() {
		const valueStart = this.props.valueStart
		return (
			<div id="choiceButtons">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Start Date"
                        inputFormat="MM-DD-YY"
						value = {valueStart}
                        onChange={this.handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
            </LocalizationProvider>
			</div>
		);
	}
}
export default StartDateSelector;