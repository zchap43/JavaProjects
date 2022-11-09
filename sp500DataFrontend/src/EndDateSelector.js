import * as React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

class EndDateSelector extends React.Component {
	constructor(props) {
		super(props);
        this.handleChange = this.handleChange.bind(this);
	};

    handleChange(e) {
        try {
            this.props.handleChangeEndDate(e.$d.toISOString().replace(/T.*/,'').split('-').join('-'));
        } catch (error) {
            console.log("Invalid Date");
        }
      }
    
	render() {
        const valueEnd = this.props.valueEnd;
		return (
			<div id="choiceButtons">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="End Date"
                    inputFormat="MM-DD-YY"
                    value = {valueEnd}
                    onChange={this.handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
				</LocalizationProvider>
			</div>
		);
	}
}
export default EndDateSelector;