import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {productReducer} from "./reducers/productReducer";
import {navigationReducer} from "./reducers/navigatonReducer";
import {oneReducer} from "./reducers/oneReducer";
import {loginReducer} from "./reducers/loginReducer";

const rootReducers = combineReducers({
    products: productReducer,
    links: navigationReducer,
    btn:oneReducer,
    login:loginReducer


});
export const store = createStore(rootReducers, composeWithDevTools());