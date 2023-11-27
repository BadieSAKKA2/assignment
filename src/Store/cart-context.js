// CartContext.js
import { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
        
      };
    
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    case 'RENDER_CART':
      return {
        ...state,
        cartIsVisible: !state.cartIsVisible && state.cartItems.length >0,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [], cartIsVisible:false });
 
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartContext, CartProvider, useCart };
