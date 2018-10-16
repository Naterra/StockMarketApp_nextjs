import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

/**   Reducers  **/
import stocksReducer from './stocksReducer';


const rootReducer = combineReducers({
    stocks: stocksReducer
});

let initialState={};


export default createStore(rootReducer,
        initialState,
        composeWithDevTools(
        applyMiddleware(thunkMiddleware))
    );
