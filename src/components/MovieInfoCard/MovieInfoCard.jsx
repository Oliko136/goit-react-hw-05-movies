import PropTypes from 'prop-types';
import styles from './MovieInfoCard.module.css';

const MovieInfoCard = ({ info }) => {
    const { poster_path, title, release_date, vote_average, tagline, overview, genres } = info;

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
   
    const releaseYear = release_date.slice(0, 4);
    const userScore = Math.round(vote_average * 10);

    const genreItem = genres.map(({ id, name }) => <li key={id}>{name}</li>);
    return (
        <div className={styles.MovieInfoCard}>
            <img
                src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : defaultImg}
                alt='Movie Poster' width={250} />
            
            <div className={styles.MovieInfo}>
                <h1 className={styles.MovieTitle}>{title} ({releaseYear})</h1>
                <p className={styles.UserScore}>User Score: {userScore}%</p>

                <h2 className={styles.Subtitle}>Overview</h2>
                <p className={styles.Tagline}>{tagline}</p>
                <p className={styles.Overview}>{overview}</p>

                <h2 className={styles.Subtitle}>Genres</h2>
                {genres?.length ?
                    <ul className={styles.GenreList}>{genreItem}</ul> :
                    <p>No genres available for this movie</p>}
            </div>
        </div>
    )
}

MovieInfoCard.propTypes = {
    info: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
        tagline: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.array,

    }).isRequired
}

export default MovieInfoCard;