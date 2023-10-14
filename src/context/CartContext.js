import React, { useContext, useReducer } from "react";
import { ACTIONS } from "../App";

const CartContext = React.createContext();

export const useCart = () => {
  return useContext(CartContext);
};
// TODO: Añadir la propiedad "quantity" (sacada de "Counter") & (exportar/hacer global) la variable "quantity" del producto a agregar al carrito, sin permitir que la propiedad "quantity" supere el "stock" del objeto "producto" con el mismo "modeIndex.color" & "modeIndex.storage".
// TODO: Hacer el formulario de Confirmación de Pedido con su respectiva validacion de campos.
// TODO: Pasar JSON a Firestore e importarlo al proyecto.
// TODO: Añadir notificaciones a las acciones que remuevan o eliminen objetos.

const cartReducer = (state, action) => {
  const { type, payload } = action;
  const { product, modeIndex } = payload;
  switch (type) {
    case ACTIONS.ADD_TO_CART:
      console.log(state.cartItems);
      const foundItem = state.cartItems.find(
        (item) => item.product.id === product.id
      );
      if (state.cartItems.length !== 0 && !foundItem) {
        console.log(foundItem);
        if (
          foundItem.product.id === product.id &&
          foundItem.modeIndex.color === modeIndex.color &&
          foundItem.modeIndex.storage === modeIndex.storage
        ) {
          console.log("Mismo producto, color y memoria");
          return state;
        } else {
          return { ...state, cartItems: [...state.cartItems, payload] };
        }
      }
      return { ...state, cartItems: [...state.cartItems, payload] };
    case ACTIONS.REMOVE_FROM_CART:
      console.log(
        state.cartItems.filter(
          (item) =>
            item.product.id !== product.id ||
            item.modeIndex.color !== modeIndex.color ||
            item.modeIndex.storage !== modeIndex.storage
        )
      );
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) =>
            item.product.id !== product.id ||
            item.modeIndex.color !== modeIndex.color ||
            item.modeIndex.storage !== modeIndex.storage
        ),
      };
    case ACTIONS.CLEAR_CART:
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
