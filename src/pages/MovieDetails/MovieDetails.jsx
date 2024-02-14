import { useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import Section from "components/Section/Section";
import Loader from "components/Loader/Loader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import { IoMdArrowRoundBack } from "react-icons/io";
import MovieInfoCard from "components/MovieInfoCard/MovieInfoCard";
import { fetchById } from "services/movie-api";
import styles from './MovieDetails.module.css';

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
        <Section>
            <Link to={backLink.current} className={styles.Backlink}>
                <IoMdArrowRoundBack />
                Go back
            </Link>
            {status === 'pending' && <Loader />}
            {status === 'rejected' && <ErrorMessage message={'An error occured, please try again later'}/>}
            {status === 'resolved' && <MovieInfoCard info={details} />}
            
            <ul className={styles.SubpageList}>
                <li>
                    <NavLink to='cast' className={styles.SubpageLink}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to='reviews' className={styles.SubpageLink}>Reviews</NavLink>
                </li>
            </ul>
    
            <Outlet />
        </Section>
    )
}

export default MovieDetails;