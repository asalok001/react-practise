import styles from './MeetupItem.module.css';

const MeetupItems = (props) => {

    return (
        <li className={styles.item}>
            <div className={styles.image}>
                <img src={props.image} alt={props.title}></img>
            </div>
            <div className={styles.cntent}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={styles.action}>
                <button>To Favourites</button>
            </div>
        </li>
    );
};

export default MeetupItems;