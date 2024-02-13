import PropTypes from 'prop-types';

const MovieInfoCard = ({ info }) => {
    const { poster_path, title, release_date, vote_average, tagline, overview, genres } = info;

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
   
    const releaseYear = release_date.slice(0, 4);
    const userScore = Math.round(vote_average * 10);

    const genreItem = genres.map(({ id, name }) => <li key={id}>{name}</li>);
    return (
        <>
            <img
                src={poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : defaultImg}
                alt='Movie Poster' width={250} />
            
            <h1>{title} ({releaseYear})</h1>
            <p>User Score: {userScore}%</p>

            <h2>Overview</h2>
            <p>{tagline}</p>
            <p>{overview}</p>

            <h2>Genres</h2>
            {genres?.length ?
                <ul>{genreItem}</ul> :
                <p>No genres available for this movie</p>}
        
        </>
    )
}

MovieInfoCard.propTypes = {
    info: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
        tagline: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.array,

    }).isRequired
}

export default MovieInfoCard;