import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        {/* <Link to="/welcome">Welcome</Link>  */}
                        {/* OR */}
                        <NavLink activeClassName={styles.active} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        {/* <Link to="/products">Products</Link> */}
                        <Link activeClassName={styles.active} to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
