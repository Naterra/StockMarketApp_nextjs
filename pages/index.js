import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**  Actions  **/
import { getTopStocks, getGrowingToday, getYesterdayGainers, getYesterdayLosers } from '../actions';

/**  Components  **/
import Layout from '../components/Layout';
import YesterdayGainers from '../components/YesterdayGainers';
import YesterdayLosers from '../components/YesterdayLosers';

class index extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<div className="row">
						<div className="col s9">hello</div>
						<div className="col s3">
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
	return { stocks: state.stocks };
};

export default connect(mapStateToProps, { getTopStocks, getGrowingToday, getYesterdayGainers, getYesterdayLosers })(index);
