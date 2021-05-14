import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {productReducer} from "./reducers/productReducer";
import {navigationReducer} from "./reducers/navigatonReducer";
import {oneReducer} from "./reducers/oneReducer";
import {loginReducer} from "./reducers/loginReducer";
import {menuCalcReducer} from "./reducers/menuCalcReducer";
import {inputCalcReducer} from "./reducers/inputCalcReducer";
import {stopWatchReducer} from "./reducers/stopWatchReducer";

const rootReducers = combineReducers({
    products: productReducer,
    links: navigationReducer,
    btn: oneReducer,
    login: loginReducer,
    calc: menuCalcReducer,
    input: inputCalcReducer,
    watch: stopWatchReducer

});
export const store = createStore(rootReducers, composeWithDevTools());