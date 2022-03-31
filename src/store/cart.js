import React, { useState } from "react";

export const CartContext = React.createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (payload) => {
    setCart([...cart, payload]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
