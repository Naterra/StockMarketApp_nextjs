import React, { Component } from 'react';

class StockRecord extends Component {
	constructor(props) {
		super(props);

		this.state = {
			change_dir: ''
		};

		/**  Events  **/
		// this.getChangeDirection = this.getChangeDirection.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		// console.error('componentDidUpdate');
		const { stock } = this.props;

		if (prevProps.stock.change !== stock.change) {
			if (stock.change > prevProps.stock.change) {
				this.setState({ change_dir: 'grow' });
			}
			if (stock.change < prevProps.stock.change) {
				this.setState({ change_dir: 'lose' });
			}
			setTimeout(() => {
				this.setState({ change_dir: '' });
			}, 500);
			// this.getChangeDirection('change',prevProps.stock.change,  stock.change);
		}
	}

	render() {
		const { stock } = this.props;
		const { change_dir } = this.state;
		// console.error('Render::state', this.state);

		return (
			<div className="row">
				<div className="col s3">
					<div className="blue-text">{stock.symbol}</div>
				</div>
				<div className="col s3">{stock.latestPrice}</div>
				<div className={`col s3 ` + (stock.change >= 0 ? 'green-text' : 'red-text')}>
					<span className={change_dir}>
						{stock.change >= 0 ? '+' : ''}
						{stock.change}
					</span>
				</div>
				<div className={`col s3 ` + (stock.changePercent >= 0 ? 'green-text' : 'red-text')}>
					<span className={change_dir}>
						{stock.changePercent >= 0 ? '+' : ''}
						{stock.changePercent}%
					</span>
				</div>
				<div className="company-name col s12">{stock.companyName}</div>
			</div>
		);
	}
}

export default StockRecord;
