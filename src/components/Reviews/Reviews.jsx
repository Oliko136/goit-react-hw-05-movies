import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import ReviewsCard from "./ReviewsCard";
import { fetchReviews } from "services/movie-api";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(null);
    
    const { movieId } = useParams();

    useEffect(() => {
         if (!movieId) {
            return
        }

        setStatus('pending');

        const getReviews = async () => {
            try {
            const { data } = await fetchReviews(movieId);
                setReviews(data.results);
                setStatus('resolved');
            }
            catch (error) {
                console.log(error.message);
                setStatus('rejected');
            }
        }

        getReviews();
    }, [movieId])

    return (
         <>
            {status === 'pending' && <Loader />}
            {status === 'rejected' && <ErrorMessage message={'An error occured, please try again later'}/>}
            {status === 'resolved' && !reviews.length && <ErrorMessage message={'No reviews available for this movie'}/>}
            {status === 'resolved' && reviews.length > 0 && <ul>{<ReviewsCard reviews={reviews}/>}</ul>}
        </>
    )
}

export default Reviews;