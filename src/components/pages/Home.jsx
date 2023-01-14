import { Link } from "react-router-dom";
import { getTrendingMovies } from "../../API";
import {  useState, useEffect } from "react";


export const Home = () => {
  
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
    }, []);
  
    return (
        <div>
            <ul>
                <h2>Trending today</h2>
                {trendingMovies.map((trendingMovie) => (
                    <li key={trendingMovie.id}><Link to="movies">{trendingMovie.title || trendingMovie.name}</Link>
                    </li>
            ))}
        </ul>
    </div> 
    )
};
