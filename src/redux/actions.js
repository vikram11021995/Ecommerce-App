/*
 *
 * Home Page actions
 *
 */

import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from "../services/Constant";
import axios from "axios";

export const getProduct = ()=>(dispatch) => {
     axios.get("https://fakestoreapi.com/products").then((res)=>{
        dispatch(getProductSuccess(res.data));
    }).catch((err)=>{
        dispatch(getProductError("something went wrong"));
    });
  
};

export const getProductSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    data: data,
  };
};
export function getProductError(error) {
  return {
    type: GET_PRODUCTS_ERROR,
    data:error,
  };
}



