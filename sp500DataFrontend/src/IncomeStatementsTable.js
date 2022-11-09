import React from 'react';
import FormPropsTextFields from './TickerTextBox.js'
import ReactApexChart from 'react-apexcharts';
class IncomeStatementsTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangePricingOptions = this.handleChangePricingOptions;
        this.handleChangePricingSeries = this.handleChangePricingSeries;
    }
	update(e) {
		this.props.HandleChangePricingSeries(e.target.pricingSeries);
		this.props.handleChangePricingOptions(e.target.pricingOptions);
    }
	render() {
		return (
			<div>
                <p> here </p>
			</div>
		);
	}
}
export default IncomeStatementsTable;