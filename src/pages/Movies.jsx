import { Link } from "react-router-dom";

const Movies = () => {
    return (
        <>
            <h1>Movies</h1>
            <ul>
                <Link to='/movies:movieId'>Movie Details</Link>
            </ul>
        </>
        
    )
}

export default Movies;