import * as types from "../actions/types";

export default function(state ={}, action){

    switch(action.type){

        case types.FETCH_TOP_STOCKS:
            return {...state, top:action.payload};
        case types.GROWING_TODAY:
            return {...state, growing_today:action.payload};
        default:
            return state;
    }
}