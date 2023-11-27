import { useCart } from "../../Store/cart-context"

function CartItem({item}){
    const {dispatch} = useCart()
    console.log("item ="+item)
    return (
        <li key={item.id} className="item">
        <p className="item-name">{item.name}</p>
        <p className="item-price">{item.price}</p>
        <p className="item-quantity">{item.quantity}{' '}</p>
        <button className ="item-button" onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item })}>
          +
        </button>
        <button className ="item-button" onClick={
          () => item.quantity=== 1 ? dispatch({ type: 'REMOVE_FROM_CART', payload: item }):
          dispatch({ type: 'DECREMENT_QUANTITY', payload: item })}>
          -
        </button>
      </li>
    )
}

export default CartItem;