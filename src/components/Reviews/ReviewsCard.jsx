import PropTypes from 'prop-types';
import styles from './ReviewsCard.module.css';

const ReviewsCard = ({ reviews }) =>
    reviews.map(({ id, author, content}) =>
        <li key={id} className={styles.Review}>
            <p className={styles.ReviewAuthor}>Author: {author}</p>
            <p>{content}</p>
        </li>);

ReviewsCard.propTypes = {
    reviews: PropTypes.array.isRequired
}

export default ReviewsCard;