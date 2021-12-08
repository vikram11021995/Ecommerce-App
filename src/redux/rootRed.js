import { combineReducers } from "redux";
import {getProduct} from "./reducers";
import {cartReducer} from "./cartReducer";



export const rootReducer = combineReducers({
    getProduct: getProduct,
    addToCartProduct: cartReducer,
})
