import PropTypes from 'prop-types';

const ReviewsCard = ({ reviews }) =>
    reviews.map(({ id, author, content}) =>
        <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
        </li>);

ReviewsCard.propTypes = {
    reviews: PropTypes.array.isRequired
}

export default ReviewsCard;