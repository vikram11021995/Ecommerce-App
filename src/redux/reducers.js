
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR} from "../services/Constant";

const initialState = {
    list: {data:[], error: null }
    // data: [],
    // error:""
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
                // data:action.data
            };
            case GET_PRODUCTS_ERROR:
            return{
                ...state,
                list: {data:null, error: action.data}
                // error: action.data

            };

        default:
            return state;
    }

};



