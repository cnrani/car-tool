import {createStore, applyMiddleware} from "redux";
import {carReducer} from "./reducers/carTool.reducers";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";


export const carStore = createStore(carReducer,
    composeWithDevTools(applyMiddleware(thunk))
);   //integrate thunk with reducer



