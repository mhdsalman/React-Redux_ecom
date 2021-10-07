import { createStore, combineReducers } from "redux";
import ProductReducer from "./reducers/ProductReducer";
import CartReducer from "./reducers/CartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
    ProductReducer,
    CartReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
