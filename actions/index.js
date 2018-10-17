import axios from 'axios';
import * as types from "./types";

export const getTopStocks = ()=> dispatch =>{
    axios.get('https://api.iextrading.com/1.0/tops')
        .then(res => {
           // console.log('res', res);
           dispatch({ type: types.FETCH_TOP_STOCKS, payload: res.data  });
        })
        .catch(err=>{
            console.log('then', err);
        });
};

export const getYesterdayGainers = ()=> (dispatch, getState) =>{
    return axios.get('https://api.iextrading.com/1.0/stock/market/list/gainers')
    // return axios.get('https://api.iextrading.com/1.0/stock/market/batch?types=quote')
        .then(res => {
            console.log('res', res.data);



            dispatch({ type: types.GAINERS_LIST, payload:res.data });
            return data;
        })
        .catch(err=>{
            console.log('then', err);
        });

};

export const getYesterdayLosers = ()=> (dispatch, getState) =>{
    return axios.get('https://api.iextrading.com/1.0/stock/market/list/losers')
        .then(res => {
            // console.log('res', res.data);

            dispatch({ type: types.LOSERS_LIST, payload:res.data });
            return data;
        })
        .catch(err=>{
            console.log('then', err);
        });

};

export const getMostActives = ()=> (dispatch, getState) =>{
    return axios.get('https://api.iextrading.com/1.0/stock/market/list/mostactive')
        .then(res => {
            // console.log('res', res.data);

            dispatch({ type: types.MOST_ACTIVE, payload:res.data });
            return data;
        })
        .catch(err=>{
            console.log('then', err);
        });

};


export const getGrowingToday = ()=> (dispatch, getState) =>{
    // return axios.get('https://api.iextrading.com/1.0/stock/market/list/gainers')
    // // return axios.get('https://api.iextrading.com/1.0/stock/market/batch?types=quote')
    //     .then(res => {
    //         console.log('res', res.data);
    //
    //
    //
    //         dispatch({ type: types.GROWING_TODAY, payload:res.data });
    //         return data;
    //     })
    //     .catch(err=>{
    //         console.log('then', err);
    //     });

};

