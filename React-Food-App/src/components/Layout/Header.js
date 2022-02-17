import React from "react";
import mealsImage from '../../assets/meals.jpg';
import CartButton from "./CartButton";
import styles from './Header.module.css';
const Header = (props) => {

    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <CartButton onCartClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='A table full of delicious foods' />
            </div>
        </React.Fragment>
    )
}
export default Header;