import React, { Component } from 'react';

/** Components  **/
import Link from 'next/link';
import StockListRecord from './StockListRecord';



class GrowingToday extends Component {
	constructor(props) {
		super(props);
		this.getTable = this.getTable.bind(this);
	}
	componentDidMount() {
        setInterval(()=>{ this.props.getMostActives(); }, 2000);
    }
	getTable() {
        const { lists } = this.props;
        if (!lists || !lists.most_active) return false ;

		const list = lists.most_active.map((stock, i) => {
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
        const { lists } = this.props;
        if (!lists || !lists.most_active) return false ;

		return (
			<div className="growing-today">
					<h3 className="list-title">Stocks: Most Actives</h3>
					{this.getTable()}
			</div>
		);
	}
}

export default GrowingToday;
