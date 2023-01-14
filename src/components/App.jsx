import { Layout } from "./Layout/Layout";
import { Home } from "./pages/Home"
import {Movies} from "./pages/Movies"

import { Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}></Route>
      </Route>
    </Routes>
  );
};

        // <Route index element={<Home />} />
        // <Route path="movies" element={<Movies />} />
        // <Route path="movies/:movieId" element={<MovieDetails />}>
        //   <Route path="cast" element={<MovieDetailsCast />} />
        //   <Route path="reviews" element={<MovieDetailsReviews />}/>
        // </Route> 
