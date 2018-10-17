import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

/**   Reducers  **/
import stocksReducer from './stocksReducer';
import listsReducer from './listsReducer';


const rootReducer = combineReducers({
    stocks: stocksReducer,
    lists: listsReducer
});

let initialState={};

export const initializeStore=()=>{
    return createStore(rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunkMiddleware))
    );
};

export default createStore(rootReducer,
        initialState,
        composeWithDevTools(
        applyMiddleware(thunkMiddleware))
    );
