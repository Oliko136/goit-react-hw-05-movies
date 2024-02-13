import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import CastCard from "./CastCard";
import { fetchCast } from "services/movie-api";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState(null);
    
    const { movieId } = useParams();

    useEffect(() => {
         if (!movieId) {
            return
        }

        setStatus('pending');

        const getCast = async () => {
            try {
            const { data } = await fetchCast(movieId);
                setCast(data.cast);
                setStatus('resolved');
            }
            catch (error) {
                console.log(error.message);
                setStatus('rejected');
            }
        }

        getCast();
    }, [movieId])



    return (
        <>
            {status === 'pending' && <Loader />}
            {status === 'rejected' && <ErrorMessage message={'An error occured, please try again later'} />}
            {status === 'resolved' && !cast.length && <ErrorMessage message={'No cast list available for this movie'}/>}
            {status === 'resolved' && cast.length > 0 && <ul><CastCard cast={cast} /></ul>}
        </>
        
    )
}

export default Cast;