//action names
const INCREMENT = "increment";
const DECREMENT = "decrement";

//dispatch functions
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const initialState = {
  count: 0,
};

//create reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      //purani wali state sari ajaien phr count ko change kar ke ye kardo
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
