import React, { useContext, useReducer } from "react";
import { ACTIONS } from "../App";

const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  const { product, quantity } = payload;
  switch (type) {
    case ACTIONS.ADD_TO_CART:
      console.log("EJECUCION ADD-TO-CART");
      // const foundItem = state.cartItems.find(
      //   (item) => item.product.id === product.id
      // );
      // if (state.cartItems.length > 0 && foundItem !== undefined) {
      //   const index = state.cartItems.indexOf(foundItem);
      //   if (
      //     state.cartItems[index].quantity + quantity <=
      //     foundItem.product.stock
      //   ) {
      //     console.log("ACA");
      //     console.log(state.cartItems[index].quantity);
      //     state.cartItems[index].quantity += quantity;
      //     console.log(state.cartItems[index].quantity);
      //     return {
      //       ...state,
      //       cartItems: [...state.cartItems],
      //     };
      //   }
      // }
      return { ...state, cartItems: [...state.cartItems, payload] };
    case ACTIONS.REMOVE_FROM_CART:
      console.log("EJECUCION REMOVE-CART");
      console.log(state.cartItems);
      console.log(payload);
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== payload
        ),
      };
    case ACTIONS.CLEAR_CART:
      console.log("EJECUCION CLEAR-CART");
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
