import { lazy} from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";


// import { Home } from "../pages/Home"
// import { Movies } from "../pages/Movies"
// import MovieDetails from "../pages/MovieDetails"
// import MovieDetailsCast from "./MovieDetailsCast/MovieDetailsCast ";
// import MovieDetailsReviews from "./MovieDetailsReviews/MovieDetailsReviews"

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const MovieDetailsCast = lazy(() => import('./MovieDetailsCast/MovieDetailsCast '));
const MovieDetailsReviews = lazy(() => import('./MovieDetailsReviews/MovieDetailsReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieDetailsCast />} />
          <Route path="reviews" element={<MovieDetailsReviews />} />
        </Route>
      </Route> 
    </Routes>
  );
};


