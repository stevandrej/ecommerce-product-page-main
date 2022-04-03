import * as actionTypes from "./types";

const initState = {
  cart: [],
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      let isNew = true;
      if (payload.quantity > 0) {
        const updatedCart = state.cart.map((item) => {
          if (item.product.id === payload.product.id) {
            isNew = false;
            return {
              product: item.product,
              quantity: item.quantity + payload.quantity,
            };
          } else return item;
        });
        return isNew === true
          ? { ...state, cart: [...state.cart, payload] }
          : { ...state, cart: updatedCart };
      }
      return { ...state };

    case actionTypes.DELETE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
