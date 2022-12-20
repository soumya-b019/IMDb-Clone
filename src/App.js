import './App.css';
/*
Here, i impotred Browser router joki browser ka main object hai;
and renamed as Router for convinience
and; Routes has various route components joki alag alag routes ko define krte
*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
! Here, we are creating 3 routes/paths
1. Home page
2. For movies various section list (popular, top rated, upcoming)
3. Movie detailed page
*/ 