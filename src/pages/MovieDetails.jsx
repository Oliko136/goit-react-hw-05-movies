import { Link, Outlet } from "react-router-dom";

const MovieDetails = () => {
    return (
        <>
            <h1>Additional Information</h1>
            <Link to='cast'>Cast</Link>
            <Link to='reviews'>Reviews</Link>
            <Outlet />
        </>
    )
}

export default MovieDetails;