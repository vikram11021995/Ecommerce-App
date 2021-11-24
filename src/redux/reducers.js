
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from "../services/Constant";

const initialState = {
    list: {data:null, error: null }

}

/*
 *
 * GET PRODUCT reducer
 *
 */
export const getProduct = (state = initialState, action) =>{
    switch (action.type){
        case GET_PRODUCTS_SUCCESS:
            return{
                ...state,
                list: {data:action.data, error: null}
            };
            case GET_PRODUCTS_ERROR:
            return{
                ...state,
                list: {data:null, error: action.data}
            };

        default:
            return state;
    }

};