import * as actionTypes from "./types";

export const addToCart = ({ product, quantity }) => {
  return {
    type: actionTypes.ADD,
    payload: { product, quantity },
  };
};

export const deleteFromCart = (id) => {
  return {
    type: actionTypes.DELETE,
    payload: id,
  };
};
