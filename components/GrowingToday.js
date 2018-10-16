import React, { Component } from 'react';
// import { connect } from 'react-redux';

/** Components  **/
import Link from 'next/link';
// import { getStocks } from '../actions';

class GrowingToday extends Component{
    componentDidMount(){
        this.props.getStocks();
    }
    render(){
        return(<div>
            GrowingToday
        </div>);
    }
}

export default  GrowingToday;