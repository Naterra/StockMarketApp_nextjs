import React, { Component } from 'react';

/** Components  **/
import Link from 'next/link';
import StockListRecord from './StockListRecord';

const NewsRecord = (props)=>{
	const { data }= props;

	return(<div class="row">
		<div class="col s12  ">
			{/*<div class="card"></div>*/}

				<span class="card-title">{data.headline}</span>

				<div class="card-content">
					<p>{data.summary}</p>
					<p className="blue-text text-darken-2">{data.source}</p>
				</div>

		</div>
	</div>


	// <div className="col s12 ">
    //
	// 	<div className="card horizontal">
	// 		<h2 className="header">{data.headline}</h2>
	// 		{/*<span class="card-title">Card Title</span>*/}
    //
	// 		{/*<div className="card-image">*/}
	// 			{/*<img src={`${data.image}.png`}/>*/}
	// 		{/*</div>*/}
	// 		<div className="card-stacked">
	// 			<div className="card-content">
	// 				<p>{data.summary}</p>
	// 				<p className="blue-text text-darken-2">{data.source}</p>
	// 			</div>
    //
	// 		</div>
	// 	</div>
	// </div>
)
};

class NewsList extends Component {
	constructor(props) {
		super(props);
		this.getTable = this.getTable.bind(this);
	}
	componentDidMount() {
        this.props.getNews();
    }
	getTable() {
        const { news } = this.props;
        if (!news) return false ;

		const list = news.map((item, i) => {
			return <NewsRecord key={i} data={item}/>
		});



		return (
			<div>
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

export default NewsList;
