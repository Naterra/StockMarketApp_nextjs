import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**  Actions  **/
import { getTopStocks, getGrowingToday, getYesterdayGainers, getYesterdayLosers, getMostActives } from '../actions';

/**  Components  **/
import Layout from '../components/Layout';
import YesterdayGainers from '../components/YesterdayGainers';
import YesterdayLosers from '../components/YesterdayLosers';
import MostActives from '../components/MostActives';

class index extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<div className="row">
						<div className="col s8">hello</div>
						<div className="col s4">
							<MostActives {...this.props} />
							<YesterdayGainers {...this.props} />
							<YesterdayLosers {...this.props} />
						</div>
					</div>
				</Layout>
			</Fragment>
		);
	}
}
const mapStateToProps = state => {
	return {
		stocks: state.stocks,
        lists: state.lists
	};
};

export default connect(mapStateToProps, { getTopStocks, getGrowingToday, getYesterdayGainers, getYesterdayLosers, getMostActives })(index);
