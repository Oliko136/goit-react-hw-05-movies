import { useState, useEffect } from "react";
import Section from "components/Section/Section";
import Loader from "components/Loader/Loader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import MoviesList from "components/MoviesList/MoviesList";
import { fetchTrending } from "services/movie-api";
import styles from './Home.module.css';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        setStatus('pending');

        const getTrending = async () => {
            try {
                const { data } = await fetchTrending();
                setTrendingMovies(data.results);
                setStatus('resolved');
            }
            catch (error) {
                console.log(error.message);
                setStatus('rejected');
            }
        }

        getTrending();
    }, [])

    return (
        <Section>
            <h1 className={styles.HomeTitle}>Trending today</h1>
            {status === 'pending' && <Loader />}
            {status === 'rejected' && <ErrorMessage message={'An error occured, please try again later'}/>}
            {status === 'resolved' && <MoviesList movies={trendingMovies} />}
        </Section>
    )
}

export default Home;