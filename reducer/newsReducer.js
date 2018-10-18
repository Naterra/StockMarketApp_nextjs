import * as types from "../actions/types";

export default function(state ={}, action){

    switch(action.type){
        case types.FETCH_NYT_NEWS:
            return  {...state, nyt_news:action.payload};
        case types.FETCH_NEWS:
            return  {...state, news:action.payload};
        default:
            return state;
    }
}