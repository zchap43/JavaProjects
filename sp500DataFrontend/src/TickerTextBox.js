import * as React from 'react';
import './App.css'
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
class FormPropsTextFields extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			valueEnd: dayjs('2030-12-31T00:00:00'),
			valueStart: dayjs('2000-01-01T00:00:00'),
			valueTicker: "GOOG"
		}
	};
	handleChangeTicker = (newValueTicker) => {
		this.setState({ valueTicker: newValueTicker });
	};
	handleChangeStartDate = (newValueStartDate) => {
		this.setState({ valueStart: newValueStartDate });
		console.log(newValueStartDate);
	};
	handleChangeEndDate = (newValueEndDate) => {
		this.setState({ valueEnd: newValueEndDate });
	};
	onTrigger = () => {
		this.props.parentCallback(this.state.valueTicker, this.state.valueStart, this.state.valueEnd);
	};
	render() {
		return (
			<div id="choiceButtons">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Stack direction="row" spacing={2}>
						<TextField
							id="outlined"
							label="Ticker"
							type="text"
							defaultValue="TSLA"
							onChange={(event) => this.handleChangeTicker(event.target.value)}
							inputProps={{ maxLength: 5 }}
						/>
						<DesktopDatePicker
							label="Start Date"
							inputFormat="MM-DD-YY"
							value={this.state.valueStart}
							onChange={(newValue) => {
								this.handleChangeStartDate(newValue.format("YYYY-DD-MM"));
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
						<DesktopDatePicker
							label="End Date"
							inputFormat="MM-DD-YY"
							value={this.state.valueEnd}
							onChange={(newValue) => {
								this.handleChangeEndDate(newValue.format("YYYY-DD-MM"));
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
						<Button variant="contained"
							onClick={this.onTrigger} >Generate</Button>
					</Stack>
				</LocalizationProvider>
			</div>
		);
	}
}
export default FormPropsTextFields;