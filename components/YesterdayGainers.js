import React, { Component } from 'react';
// import GrowingTodayChart from './charts/growingTodayChart';

/** Components  **/
import Link from 'next/link';
import StockListRecord from './StockListRecord';

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
		const { lists } = this.props;
		if (!lists || !lists.gainers) return ;

		const list = lists.gainers.map((stock, i) => {
            return <StockListRecord key={i} stock={stock}/>
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

					<h3 className="list-title">Stocks:Gainers</h3>
					{this.getTable()}

			</div>
		);
	}
}

export default GrowingToday;
