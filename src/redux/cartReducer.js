import { ADD_TO_CART_SUCCESS, DELETE_ITEM } from "../services/Constant";

const initialState1 = {
  list: [],
};

export const cartReducer = (state = initialState1, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      // First check product is already existing in the array of cart (state.list) - findIndex
      // If it's exists then we need to take that procust index from the list and increase it's qty and update whole array - state.list[index]['qty'] += 1
      // If not exists then we ned to add new product object in this list
      // console.log("state", action.data);
      // console.log("state", state);

      if(state?.list && state.list.length>0){
        const itemIndex = state?.list.findIndex(
          (cartData) => cartData.id === action.data.id
        );
          console.log("m",itemIndex)
        if (itemIndex>=0 && state.list[itemIndex].qty >= 1) {
           state.list[itemIndex].qty += 1;
           return{
             ...state,
             list: [...state.list],
           }
        }
        else{
          return{
            ...state,
            list: [...state.list, action.data],
          }
        }

      }else{
        return {
        ...state,
        list: [action.data],
      };
    }

    case DELETE_ITEM:
      console.log("/hqqq", state.list);
      const newList = state.list.filter((data)=>data.id !== action.payload)
      console.log("yy", action.payload);
      console.log("zz", newList)
      return {...state, list: newList}

    default:
      return state;
  }
};




