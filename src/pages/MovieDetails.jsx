import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import MovieInfoCard from "components/MovieInfoCard/MovieInfoCard";
import { fetchById } from "services/movie-api";

const MovieDetails = () => {
    const [details, setDetails] = useState({});
    const [status, setStatus] = useState(null);
    
    const { movieId } = useParams();

    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {
        if (!movieId) {
            return
        }

        setStatus('pending');

        const getDetails = async () => {
            try {
            const { data } = await fetchById(movieId);
                setDetails(data);
                setStatus('resolved');
            }
            catch (error) {
                console.log(error.message);
                setStatus('rejected');
            }
        }

        getDetails();
    }, [movieId])


    return (
        <>
            <Link to={backLink.current}>Go back</Link>
            {status === 'pending' && <Loader />}
            {status === 'rejected' && <ErrorMessage message={'An error occured, please try again later'}/>}
            {status === 'resolved' && <MovieInfoCard info={details} />}
            
            <p>Additional Information</p>
            <Link to='cast'>Cast</Link>
            <Link to='reviews'>Reviews</Link>
            <Outlet />
        </>
    )
}

export default MovieDetails;