import classes from './CartItem.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import cartSlice from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props.item;

  const dispatch = useDispatch();

  const addItemHandler = (event) => {
    // event.preventDefault();
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }));
  };
  const removeItemHandler = (event) => {
    // event.preventDefault();
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>({price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
