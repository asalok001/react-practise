import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../storeContext/cart-context';
import styles from './CartButton.module.css';

const CartButton = props => {
    const [buttonHighlighted, setButtonHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0);

    const btnStyles = `${styles.button} ${buttonHighlighted ? styles.bump : ''}`;

    useEffect(
        () => {
            if (items.length === 0) {
                return;
            }
            setButtonHighlighted(true);

            const timer = setTimeout(() => {
                setButtonHighlighted(false);
            }, 300);

            return () => {
                clearTimeout(timer);
            };
        },
        [items]
    );

    return (
        <button className={btnStyles} onClick={props.onCartClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span> Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};
export default CartButton;
