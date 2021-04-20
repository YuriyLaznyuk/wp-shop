import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {productReducer} from "./reducers/productReducer";
import {navigationReducer} from "./reducers/navigatonReducer";

const rootReducers = combineReducers({
    products: productReducer,
    links: navigationReducer,

});
export const store = createStore(rootReducers, composeWithDevTools());