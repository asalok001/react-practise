import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Great Logo</div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink to="/quote" activeClassName={styles.active}>
                            All Quote
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-quote" activeClassName={styles.active}>
                            Add Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
