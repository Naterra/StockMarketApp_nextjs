import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/**  Actions  **/
import { getStocks } from '../actions';

/**  Components  **/
import Page from '../components/Page';
import Layout from '../components/Layout';
import GrowingToday from '../components/GrowingToday';


class index extends Component{
    render(){
        return(<Fragment>
            <Layout>
                <div>Welcome to next.js!</div>
                <GrowingToday {...this.props}/>
            </Layout>
        </Fragment>);
    }
}

export default Page(connect(null, { getStocks })(index));