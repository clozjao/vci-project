import { SET_VCI_PRICE_RES } from "../actions/actionTypes";

const initState = {
  WSdata: {},
};

export const vciReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_VCI_PRICE_RES:
      return {
        ...state,
        WSdata: action.payload,
      };
    default:
      return state;
  }
};
