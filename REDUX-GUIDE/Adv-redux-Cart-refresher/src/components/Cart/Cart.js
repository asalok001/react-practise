import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import cartSlice from '../../store/cart-slice';

const Cart = props => {
  const cartItems = useSelector(state => state.cart.items);
  // .map((item) => {
  // title: item.title;
  // quantity: item.quantity;
  // price: item.price;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              price: item.price
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
