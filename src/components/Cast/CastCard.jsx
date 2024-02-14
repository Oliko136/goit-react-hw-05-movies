import PropTypes from 'prop-types';
import styles from './CastCard.module.css';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const CastCard = ({ cast }) =>
    cast.map(({ id, profile_path, name, character }) =>
        <li key={id} className={styles.CastCard}>
            <img
                className={styles.CastImg}
                src={profile_path ? `https://image.tmdb.org/t/p/w300/${profile_path}` : defaultImg}
                alt={name} />
            <div className={styles.CastInfo}>
                <p className={styles.Actor}>{name}</p>
                <p>Character: {character}</p>
            </div>
    
        </li>);

CastCard.propTypes = {
    cast: PropTypes.array.isRequired
}

export default CastCard;