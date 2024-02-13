import PropTypes from 'prop-types';
import { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                value={query}
                autoComplete="off"
                autoFocus
                placeholder="Search movies by title"
                onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    )
}

MoviesSearch.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default MoviesSearch;