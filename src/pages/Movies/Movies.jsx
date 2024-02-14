import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Section from "components/Section/Section";
import Loader from "components/Loader/Loader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import MoviesList from "components/MoviesList/MoviesList";
import MoviesSearch from "components/MoviesSearch/MoviesSearch";
import { fetchByTitle } from "services/movie-api";

const Movies = () => {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [status, setStatus] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) {
            return
        }

        setStatus('pending');

        const getSearchedMovies = async () => {
            try {
                const { data } = await fetchByTitle(query);
                setSearchedMovies(data.results);
                setStatus('resolved');
            }
            catch (error) {
                console.log(error.message);
                setStatus('rejected');
            }
        }

        getSearchedMovies();
    }, [query])

    const handleSearch = value => {
        setSearchParams({ query: value });
        setSearchedMovies([]);
    }

    return (
        <Section>
            <MoviesSearch onSubmit={handleSearch}/>
            {status === 'pending' && <Loader />}
            {status === 'rejected' && <ErrorMessage message={'An error occured, please try again later'}/>}
            {status === 'resolved' && !searchedMovies.length && <ErrorMessage message={`Sorry, no results for ${query}. Please, enter a valid title.`}/>}
            {status === 'resolved' && searchedMovies.length > 0 && <MoviesList movies={searchedMovies} />}
        </Section>
        
    )
}

export default Movies;