import * as types from "../actions/types";

export default function(state ={}, action){

    switch(action.type){
        case types.LOSERS_LIST:
            return {...state, losers:action.payload};
        case types.GAINERS_LIST:
            return {...state, gainers:action.payload};
        case types.MOST_ACTIVE:
            return {...state,  most_active:action.payload};
        default:
            return state;
    }
}