import { SearchBox } from "components/SearchBox/SearchBox"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getSearchMovies } from "../components/Api/API"
import { Link } from "react-router-dom";

const Movies = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);

    const query = searchParams.get("query")?? "";

    useEffect(() => {
        if (query) {
        getSearchMovies(query).then(setMovies)};
    }, [query, searchParams]);


    const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query} : {};
    setSearchParams(nextParams);
  };
    
    return (
        <>
            <SearchBox value={query} onChange={updateQueryString} />
    <ul>
    {movies.map((movie) => (
        <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link></li>
        ))}
        </ul>
    </>
    );
};

export default Movies;