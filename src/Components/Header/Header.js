import "./HeaderStyles.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useCart} from "./../../Store/cart-context";

function Header() {
    const { dispatch } = useCart();

    const handleToggleCart = () => {
      dispatch({ type: 'RENDER_CART' });
    };
  return (
    <div className="header">
      <div className="header-title">ReactMeals</div>
      <button id="cart-button" className="cart-button" onClick={handleToggleCart}>
        <ShoppingCartIcon fontSize="medium"/>
        <div className="cart-button-text">Your Cart</div>
        <div className="cart-number-tag">0</div>
      </button >
    </div>
  );
}

export default Header;