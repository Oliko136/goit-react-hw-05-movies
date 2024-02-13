import PropTypes from 'prop-types';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const CastCard = ({ cast }) =>
    cast.map(({ id, profile_path, name, character }) =>
        <li key={id}>
            <img
                src={profile_path ? `https://image.tmdb.org/t/p/w300/${profile_path}` : defaultImg}
                alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>);

CastCard.propTypes = {
    cast: PropTypes.array.isRequired
}

export default CastCard;