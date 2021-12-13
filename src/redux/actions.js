/*
 *
 * Home Page actions
 *
 */

import { GET_PRODUCTS_SUCCESS, DELETE_ITEM, GET_PRODUCTS_ERROR, ADD_TO_CART_SUCCESS} from "../services/Constant";
import axios from "axios";

export const getProduct = ()=>(dispatch) => {
     axios.get("https://fakestoreapi.com/products").then((res)=>{
        dispatch(getProductSuccess(res.data));
        // console.log("hi", res.data);
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

/*
 *
 * selected product actions
 *
 */

export const addToCart = (productList)=> {
  // console.log("productList", productList);
  return {
    type: ADD_TO_CART_SUCCESS,
    data:productList,

  };
};

//

export function deleteItem(itemId) {
  // console.log("delete");
  return {
    type: DELETE_ITEM,
    payload: itemId,
  };
}






