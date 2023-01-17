import { Link } from "react-router-dom";
import { getTrendingMovies } from "../components/Api/API";
import {  useState, useEffect } from "react";


const Home = () => {
  
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setTrendingMovies);
    }, []);
  
    return (
        <div>
            <ul>
                <h2>Trending today</h2>
                {trendingMovies.map((trendingMovie) => (
                    <li key={trendingMovie.id}>
                        <Link to={`/movies/${trendingMovie.id}`}>{trendingMovie.title || trendingMovie.name}</Link>
                    </li>
            ))}
        </ul>
    </div> 
    )
};

export default Home;
