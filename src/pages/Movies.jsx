import { SearchBox } from "components/SearchBox/SearchBox"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getSearchMovies } from "../components/Api/API"
import { Link } from "react-router-dom";

const Movies = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);

    const query = searchParams.get("query");

    useEffect(() => {
        if (query) {
        getSearchMovies(query).then(setMovies)};
    }, [query, searchParams]);
    
    return (
        <>
            <SearchBox value={query} />
    <ul>
    {movies.map((movie) => (
        <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link></li>
        ))}
        </ul>
    </>
    );
};

export default Movies;