import {applyMiddleware, createStore} from "redux";
import {getProduct} from "./reducers";
import thunkMiddleware from 'redux-thunk';

const bindMiddleware = (middleware) => {
    return applyMiddleware(...middleware);
  };

export const store = createStore(getProduct, bindMiddleware([thunkMiddleware]));

