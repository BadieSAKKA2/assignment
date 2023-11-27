
import "./ItemStyles.css";
import { useCart } from './../../Store/cart-context';

const Item = ({ item }) => {
  const { state, dispatch } = useCart();
  const cartItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

  const incrementQuantity = () => {
    if (cartItem) {
      dispatch({ type: 'INCREMENT_QUANTITY', payload: item });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
    }
  };

  return (
    <li className="item" key={item.id}>
      <div>
        <p className='item-name'>{item.name}</p>
        <p className='item-description'>{item.description}</p>
        <p className='item-price'>{item.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p> 
        
      </div>
      <div>
        <p className="item-amount">Amount: {cartItem ? cartItem.quantity : 0}{' '}</p>
        <button onClick={incrementQuantity}>Add</button>
        </div>
    </li>
  );
};

export default Item;


