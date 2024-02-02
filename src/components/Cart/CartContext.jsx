import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

// Handlinger
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

// Reducer-funktion
const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const { id, title, price, quantity, image } = action.payload;

      // Tjek om varen allerede er i kurven
      const existingItemIndex = state.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // Opdater antallet af eksisterende vare
        const updatedCart = [...state];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Tilføj ny vare til kurven
        return [...state, { id, title, price, quantity, image }];
      }
    }

    case actionTypes.REMOVE_FROM_CART: {
      const { id } = action.payload;

      // Fjern varen fra kurven
      return state.filter((item) => item.id !== id);
    }

    default:
      return state;
  }
};

// CartProvider-komponent
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: item,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: { id },
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Brugerdefineret hook til at bruge cart-data
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
