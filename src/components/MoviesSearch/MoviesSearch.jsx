import PropTypes from 'prop-types';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from './MoviesSearch.module.css';

const MoviesSearch = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = ({ target }) => { setQuery(target.value.toLowerCase()) };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            alert('Please fill out this field');
            return;
        }

        onSubmit(query);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.MoviesSearchForm}>
            <input
                className={styles.MoviesSearchInput}
                type="text"
                name="search"
                value={query}
                autoComplete="off"
                autoFocus
                placeholder="Search movies by title"
                onChange={handleChange} />
            <button type="submit" className={styles.MoviesSearchButton}>
                <FaSearch className={styles.MoviesSearchButtonIcon} />
            </button>
        </form>
    )
}

MoviesSearch.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default MoviesSearch;