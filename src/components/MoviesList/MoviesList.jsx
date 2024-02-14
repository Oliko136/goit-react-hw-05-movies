import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
    const location = useLocation();
    
    const elements = movies.map(({ id, title }) =>
        <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }} className={styles.MovieLink}>{title}</Link>
        </li>);
    
    return (
        <ul className={styles.MoviesList}>
            {elements}
        </ul>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MoviesList;