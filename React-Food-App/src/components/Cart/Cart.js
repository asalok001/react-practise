import React, { useContext, useState } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../storeContext/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasITems = cartCtx.items.length > 0;

    const removeCartItemHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const addCartItemHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = (userdata) => {
        fetch('https://react-meals-75ff5-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userdata,
                orderItems: cartCtx.items
            })
        });
    };

    const modalAction =
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>
                Close
            </button>
            {hasITems && <button className={styles.button} onClick={orderHandler}>Order</button>}
        </div>;


    const cartItem = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={removeCartItemHandler.bind(null, item.id)}
                    onAdd={addCartItemHandler.bind(null, item)}
                />
            ))}
        </ul>
    );
    return (
        <Modal onBackdropClose={props.onClose}>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
            {!isCheckout && modalAction}
        </Modal>
    );
};

export default Cart;
