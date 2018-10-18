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




export const getNewYorkTimesNews = ()=> (dispatch, getState) =>{
    let options =[];

    options.push("api-key=fdc4eb9230ce428bb2e3ccb28d9f47a5");
    options.push("sort=newest");
    options.push("q=stock,APL,AMZN,UFPI, trading");

    //NycTimes
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?"+options.join("&") )
        .then(res => {
            const data = res && res.status==200 ? res.data.response.docs : [];
            const newData = data.map(i=>{
                console.error('i', i);

                if(i.multimedia.length>0){
                    i.img = 'https://www.nytimes.com/'+i.multimedia[0].url;
                }else{
                    const random =Math.floor(Math.random() * (8 - 0 + 1)) + 0;
                    i.img = '/static/stock_news_img_'+random+'.jpg';
                }
                return i;
            });


            // console.error('getNews::then', res);

            dispatch({ type: types.FETCH_NYT_NEWS, payload:newData});
            return data;
        })
        .catch(err=>{
            console.error('then', err);
        });

};

export const getNews = ()=> (dispatch, getState) =>{
        return axios.get('https://api.iextrading.com/1.0/stock/market/news/last/25')
           .then(res => {
                console.log('res', res.data);
                //TODO: tmp override image while api not working
                const newData = res.data.map(i=>{
                    i.img ='';
                    return i;
                });

                dispatch({ type: types.FETCH_NEWS, payload:newData });
                return data;
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

