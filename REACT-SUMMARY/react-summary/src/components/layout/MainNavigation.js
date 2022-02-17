import { Link } from "react-router-dom";
import styles from './MainNavigation.module.css';


const Mainavigation = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav >
                <ul>
                    <li><Link to='/'>All Meetup</Link></li>
                    <li> <Link to='/new-meetup'>Add New Meetup</Link></li>
                    <li> <Link to='/favourites'>My Favourite Meetup</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Mainavigation;