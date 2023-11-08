import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from './Components/Movie/Movie';
import { movies } from './movieDummy';
import Home from "./Components/pages/Home";
import Headers from "./Components/pages/Header";
import Celebrity from "./Components/pages/Celebirity";
import TV from "./Components/pages/TV";
import NotFound from "./Components/pages/NotFound";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Headers/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie" element={
            <div className="app-container">
            {
              movies.results.map((item) =>{
                return (
                  <Movie
                  title = {item.title}
                  poster_path = {item.poster_path}
                  vote_average = {item.vote_average}
                  overview = {item.overview}
                  />
                )
              })
            }
          </div>
          } />
          <Route to="/celebrity" element={<Celebrity />}/>
          <Route to="/tv" element={<TV />}/>
          <Route to="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
