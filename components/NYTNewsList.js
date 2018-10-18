import React, { Component } from 'react';

/** Components  **/
import Link from 'next/link';
import StockListRecord from './StockListRecord';

const NewsRecord = (props)=>{
	const { data }= props;

	const imgStyles={
		backgroundPosition: "center center",
		backgroundSize: "cover",
		backgroundImage: `url(${data.img})`,
		display: "block",
		width: "100%",
		height: "135px"
	};

	return(<div className="row news-item">
		<div className="col s3  ">
			<img src={data.img} style={imgStyles} />
		</div>
		<div className="col s9  ">
			{/*<div class="card"></div>*/}

				<span className="card-title">{data.headline.main}</span>

				<div className="card-content">
					<p>{data.snippet}</p>
					<p className="blue-text text-darken-2">{data.source}</p>
				</div>

		</div>
	</div>);
};

class NYTNewsList extends Component {
	constructor(props) {
		super(props);
		this.getTable = this.getTable.bind(this);
	}
	componentDidMount() {
        this.props.getNewYorkTimesNews();
    }
	getTable() {
        const { news } = this.props;
        if (!news || !news.nyt_news) return false ;

		const list = news.nyt_news.map((item, i) => {
			return <NewsRecord key={i} data={item}/>
		});



		return (
			<div>
				{list}
			</div>
		);
	}

	render() {
        const { news } = this.props;
        if (!news || !news.nyt_news) return false ;

		return (
			<div className="growing-today">
					<h3 className="list-title">Stocks: Most Actives</h3>
					{this.getTable()}
			</div>
		);
	}
}

export default NYTNewsList;
