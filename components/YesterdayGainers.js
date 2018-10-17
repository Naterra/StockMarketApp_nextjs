import React, { Component } from 'react';
// import GrowingTodayChart from './charts/growingTodayChart';

/** Components  **/
import Link from 'next/link';

class GrowingToday extends Component {
	constructor(props) {
		super(props);
		this.getTable = this.getTable.bind(this);
	}
	componentDidMount() {
        this.props.getYesterdayGainers();

    }
	getTable() {
		// console.log('getTable', this.props);
		const { stocks } = this.props;
		if (!stocks || !stocks.yesterday_gainers) return ;

		const list = stocks.yesterday_gainers.map(i => {
			return (<div className="row">
				<div className="col s3">
					<div className="blue-text">{i.symbol}</div>
				</div>
				<div  className="col s3">{i.latestPrice}</div>
				<div className="col s3">{i.change}</div>
				<div className="col s3">{i.changePercent}</div>
				<div className="company-name col s12">{i.companyName}</div>
			</div>);
		});

		const tableHead = (<div className="header row">
			<div className="col s3">Symbol</div>
			<div className="col s3">Last Price</div>
			<div className="col s3">Change</div>
			<div className="col s3">% Change</div>
		</div>);

		return (
			<div>
				{tableHead}
				{list}
			</div>
		);
	}

	render() {
		return (
			<div className="growing-today">

					<h5>Yesterday Gainers</h5>
					{this.getTable()}

			</div>
		);
	}
}

export default GrowingToday;
