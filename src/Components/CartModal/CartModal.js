import CartItem from "./../CartItem/CartItem"
import classes from "./CartModal.module.css";
import { useCart } from './../../Store/cart-context';

const CartModal = () => {
  const { state , dispatch} = useCart();

  const handleCloseModal = ()=>{
    dispatch({type:"RENDER_CART"})
  }
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  
  return (
    <div>
      {state.cartIsVisible && (
        <div className={classes.backdrop}>
          <div className={classes.modal}>
            <div className={classes.content}>
              <ul>
                {state.cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
              <p>Total:{calculateTotalPrice(state.cartItems)}</p>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
        )}
      </div>
  );
};

export default CartModal;
