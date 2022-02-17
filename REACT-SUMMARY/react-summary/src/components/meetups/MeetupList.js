import styles from './MeetupList.module.css';
import MeetupItems from './MeetupItems';

const MeetupList = (props) => {

    return (
        <ul className={styles.list}>
            {props.meetups.map(meetup => (
                <MeetupItems
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />
            ))}
        </ul>
    );
};

export default MeetupList;